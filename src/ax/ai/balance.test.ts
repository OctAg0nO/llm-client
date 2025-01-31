import { describe, expect, test } from 'vitest'

import { AxAIServiceNetworkError } from '../util/apicall.js'

import { AxBalancer } from './balance.js'
import { AxMockAIService } from './mock/api.js'
import type { AxAIService, AxChatRequest, AxChatResponse } from './types.js'

const createMockService = ({
  name = 'test-service',
  latencyMs = 100,
  chatResponse = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _req: Readonly<AxChatRequest>
  ): Promise<AxChatResponse> => ({
    results: [
      {
        content: 'test response',
        finishReason: 'stop' as const,
      },
    ],
    modelUsage: {
      promptTokens: 20,
      completionTokens: 10,
      totalTokens: 30,
    },
  }),
}: {
  name?: string
  latencyMs?: number
  chatResponse?: (req: Readonly<AxChatRequest>) => Promise<AxChatResponse>
} = {}) => {
  return new AxMockAIService({
    name,
    modelInfo: {
      name: 'test-model',
      provider: 'test-provider',
      promptTokenCostPer1M: 200,
      completionTokenCostPer1M: 150,
    },
    features: {
      functions: true,
      streaming: true,
    },
    chatResponse,
    latencyMs,
  })
}

describe('AxBalancer', () => {
  test('first service works', async () => {
    let calledService: number | undefined
    const services: AxAIService[] = [
      createMockService({
        name: 'service-0',
        chatResponse: async () => {
          calledService = 0
          return {
            results: [
              {
                content: 'test response',
                finishReason: 'stop',
              },
            ],
            modelUsage: {
              promptTokens: 20,
              completionTokens: 10,
              totalTokens: 30,
            },
          }
        },
      }),
      createMockService({
        name: 'service-1',
        latencyMs: 200, // Changed: Made service-1 slower
        chatResponse: async () => {
          calledService = 1
          return {
            results: [
              {
                content: 'test response',
                finishReason: 'stop',
              },
            ],
            modelUsage: {
              promptTokens: 20,
              completionTokens: 10,
              totalTokens: 30,
            },
          }
        },
      }),
    ]

    const balancer = new AxBalancer(services)
    await balancer.chat({
      chatPrompt: [{ role: 'user', content: 'test' }],
      model: 'mock',
    })

    expect(calledService).toBe(0) // Changed: Now expecting service-0 to be called
  })

  test('first service fails', async () => {
    let calledService: number | undefined
    const services: AxAIService[] = [
      createMockService({
        name: 'service-0',
        latencyMs: 200,
        chatResponse: async () => {
          calledService = 0
          return {
            results: [
              {
                content: 'test response',
                finishReason: 'stop',
              },
            ],
            modelUsage: {
              promptTokens: 20,
              completionTokens: 10,
              totalTokens: 30,
            },
          }
        },
      }),
      createMockService({
        name: 'service-1',
        chatResponse: async () => {
          throw new AxAIServiceNetworkError(new Error('test'), 'test-url')
        },
      }),
    ]

    const balancer = new AxBalancer(services)
    await balancer.chat({
      chatPrompt: [{ role: 'user', content: 'test' }],
      model: 'mock',
    })

    expect(calledService).toBe(0)
  })

  test('first service works comparator', async () => {
    let calledService: number | undefined
    const services: AxAIService[] = [
      createMockService({
        name: 'service-0',
        latencyMs: 200,
        chatResponse: async () => {
          calledService = 0
          return {
            results: [
              {
                content: 'test response',
                finishReason: 'stop',
              },
            ],
            modelUsage: {
              promptTokens: 20,
              completionTokens: 10,
              totalTokens: 30,
            },
          }
        },
      }),
      createMockService({
        name: 'service-1',
        chatResponse: async () => {
          calledService = 1
          return {
            results: [
              {
                content: 'test response',
                finishReason: 'stop',
              },
            ],
            modelUsage: {
              promptTokens: 20,
              completionTokens: 10,
              totalTokens: 30,
            },
          }
        },
      }),
    ]

    const balancer = new AxBalancer(services, {
      comparator: AxBalancer.inputOrderComparator,
    })

    await balancer.chat({
      chatPrompt: [{ role: 'user', content: 'test' }],
      model: 'mock',
    })

    expect(calledService).toBe(0)
  })

  test('first service fails comparator', async () => {
    let calledService: number | undefined
    const services: AxAIService[] = [
      createMockService({
        name: 'service-0',
        latencyMs: 200,
        chatResponse: async () => {
          throw new AxAIServiceNetworkError(new Error('test'), 'test-url')
        },
      }),
      createMockService({
        name: 'service-1',
        chatResponse: async () => {
          calledService = 1
          return {
            results: [
              {
                content: 'test response',
                finishReason: 'stop',
              },
            ],
            modelUsage: {
              promptTokens: 20,
              completionTokens: 10,
              totalTokens: 30,
            },
          }
        },
      }),
    ]

    const balancer = new AxBalancer(services, {
      comparator: AxBalancer.inputOrderComparator,
    })

    await balancer.chat({
      chatPrompt: [{ role: 'user', content: 'test' }],
      model: 'mock',
    })

    expect(calledService).toBe(1)
  })
})
