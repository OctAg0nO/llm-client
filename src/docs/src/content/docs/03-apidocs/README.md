---
title: "@ax-llm/ax"
---

## Enumerations

- [AxAIAnthropicModel](#apidocs/enumerationaxaianthropicmodel)
- [AxAICohereEmbedModel](#apidocs/enumerationaxaicohereembedmodel)
- [AxAICohereModel](#apidocs/enumerationaxaicoheremodel)
- [AxAIDeepSeekModel](#apidocs/enumerationaxaideepseekmodel)
- [AxAIGoogleGeminiEmbedModel](#apidocs/enumerationaxaigooglegeminiembedmodel)
- [AxAIGoogleGeminiModel](#apidocs/enumerationaxaigooglegeminimodel)
- [AxAIGoogleGeminiSafetyCategory](#apidocs/enumerationaxaigooglegeminisafetycategory)
- [AxAIGoogleGeminiSafetyThreshold](#apidocs/enumerationaxaigooglegeminisafetythreshold)
- [AxAIGroqModel](#apidocs/enumerationaxaigroqmodel)
- [AxAIHuggingFaceModel](#apidocs/enumerationaxaihuggingfacemodel)
- [AxAIMistralEmbedModels](#apidocs/enumerationaxaimistralembedmodels)
- [AxAIMistralModel](#apidocs/enumerationaxaimistralmodel)
- [AxAIOpenAIEmbedModel](#apidocs/enumerationaxaiopenaiembedmodel)
- [AxAIOpenAIModel](#apidocs/enumerationaxaiopenaimodel)
- [AxAIRekaModel](#apidocs/enumerationaxairekamodel)
- [AxJSInterpreterPermission](#apidocs/enumerationaxjsinterpreterpermission)
- [AxLLMRequestTypeValues](#apidocs/enumerationaxllmrequesttypevalues)
- [AxSpanKindValues](#apidocs/enumerationaxspankindvalues)

## Classes

- [AxAgent](#apidocs/classaxagent)
- [AxAI](#apidocs/classaxai)
- [AxAIAnthropic](#apidocs/classaxaianthropic)
- [AxAIAzureOpenAI](#apidocs/classaxaiazureopenai)
- [AxAICohere](#apidocs/classaxaicohere)
- [AxAIDeepSeek](#apidocs/classaxaideepseek)
- [AxAIGoogleGemini](#apidocs/classaxaigooglegemini)
- [AxAIGroq](#apidocs/classaxaigroq)
- [AxAIHuggingFace](#apidocs/classaxaihuggingface)
- [AxAIMistral](#apidocs/classaxaimistral)
- [AxAIOllama](#apidocs/classaxaiollama)
- [AxAIOpenAI](#apidocs/classaxaiopenai)
- [AxAIReka](#apidocs/classaxaireka)
- [AxAITogether](#apidocs/classaxaitogether)
- [AxApacheTika](#apidocs/classaxapachetika)
- [AxAssertionError](#apidocs/classaxassertionerror)
- [AxBalancer](#apidocs/classaxbalancer)
- [AxBaseAI](#apidocs/classaxbaseai)
- [AxBootstrapFewShot](#apidocs/classaxbootstrapfewshot)
- [AxChainOfThought](#apidocs/classaxchainofthought)
- [AxDB](#apidocs/classaxdb)
- [AxDBBase](#apidocs/classaxdbbase)
- [AxDBCloudflare](#apidocs/classaxdbcloudflare)
- [AxDBManager](#apidocs/classaxdbmanager)
- [AxDBMemory](#apidocs/classaxdbmemory)
- [AxDBPinecone](#apidocs/classaxdbpinecone)
- [AxDBWeaviate](#apidocs/classaxdbweaviate)
- [AxDefaultQueryRewriter](#apidocs/classaxdefaultqueryrewriter)
- [AxDefaultResultReranker](#apidocs/classaxdefaultresultreranker)
- [AxDockerSession](#apidocs/classaxdockersession)
- [AxEmbeddingAdapter](#apidocs/classaxembeddingadapter)
- [AxFunctionProcessor](#apidocs/classaxfunctionprocessor)
- [AxGen](#apidocs/classaxgen)
- [AxHFDataLoader](#apidocs/classaxhfdataloader)
- [AxInstanceRegistry](#apidocs/classaxinstanceregistry)
- [AxJSInterpreter](#apidocs/classaxjsinterpreter)
- [AxMemory](#apidocs/classaxmemory)
- [AxProgram](#apidocs/classaxprogram)
- [AxProgramWithSignature](#apidocs/classaxprogramwithsignature)
- [AxPromptTemplate](#apidocs/classaxprompttemplate)
- [AxRAG](#apidocs/classaxrag)
- [AxRateLimiterTokenUsage](#apidocs/classaxratelimitertokenusage)
- [AxRoute](#apidocs/classaxroute)
- [AxRouter](#apidocs/classaxrouter)
- [AxSignature](#apidocs/classaxsignature)
- [AxTestPrompt](#apidocs/classaxtestprompt)
- [AxValidationError](#apidocs/classaxvalidationerror)

## Interfaces

- [AxAgentic](#apidocs/interfaceaxagentic)
- [AxAIAnthropicArgs](#apidocs/interfaceaxaianthropicargs)
- [AxAIAnthropicContentBlockDeltaEvent](#apidocs/interfaceaxaianthropiccontentblockdeltaevent)
- [AxAIAnthropicContentBlockStartEvent](#apidocs/interfaceaxaianthropiccontentblockstartevent)
- [AxAIAnthropicContentBlockStopEvent](#apidocs/interfaceaxaianthropiccontentblockstopevent)
- [AxAIAnthropicErrorEvent](#apidocs/interfaceaxaianthropicerrorevent)
- [AxAIAnthropicMessageDeltaEvent](#apidocs/interfaceaxaianthropicmessagedeltaevent)
- [AxAIAnthropicMessageStartEvent](#apidocs/interfaceaxaianthropicmessagestartevent)
- [AxAIAnthropicMessageStopEvent](#apidocs/interfaceaxaianthropicmessagestopevent)
- [AxAIAnthropicPingEvent](#apidocs/interfaceaxaianthropicpingevent)
- [AxAIAzureOpenAIArgs](#apidocs/interfaceaxaiazureopenaiargs)
- [AxAICohereArgs](#apidocs/interfaceaxaicohereargs)
- [AxAIDeepSeekArgs](#apidocs/interfaceaxaideepseekargs)
- [AxAIGoogleGeminiArgs](#apidocs/interfaceaxaigooglegeminiargs)
- [AxAIGoogleGeminiOptionsTools](#apidocs/interfaceaxaigooglegeminioptionstools)
- [AxAIGroqArgs](#apidocs/interfaceaxaigroqargs)
- [AxAIHuggingFaceArgs](#apidocs/interfaceaxaihuggingfaceargs)
- [AxAIMemory](#apidocs/interfaceaxaimemory)
- [AxAIMistralArgs](#apidocs/interfaceaxaimistralargs)
- [AxAIOpenAIArgs](#apidocs/interfaceaxaiopenaiargs)
- [AxAIOpenAIResponseDelta](#apidocs/interfaceaxaiopenairesponsedelta)
- [AxAIRekaArgs](#apidocs/interfaceaxairekaargs)
- [AxAIService](#apidocs/interfaceaxaiservice)
- [AxAIServiceImpl](#apidocs/interfaceaxaiserviceimpl)
- [AxAIServiceMetrics](#apidocs/interfaceaxaiservicemetrics)
- [AxAITogetherArgs](#apidocs/interfaceaxaitogetherargs)
- [AxApacheTikaArgs](#apidocs/interfaceaxapachetikaargs)
- [AxApacheTikaConvertOptions](#apidocs/interfaceaxapachetikaconvertoptions)
- [AxAssertion](#apidocs/interfaceaxassertion)
- [AxBaseAIArgs](#apidocs/interfaceaxbaseaiargs)
- [AxBaseAIFeatures](#apidocs/interfaceaxbaseaifeatures)
- [AxDBBaseArgs](#apidocs/interfaceaxdbbaseargs)
- [AxDBBaseOpOptions](#apidocs/interfaceaxdbbaseopoptions)
- [AxDBCloudflareArgs](#apidocs/interfaceaxdbcloudflareargs)
- [AxDBLoaderOptions](#apidocs/interfaceaxdbloaderoptions)
- [AxDBManagerArgs](#apidocs/interfaceaxdbmanagerargs)
- [AxDBMatch](#apidocs/interfaceaxdbmatch)
- [AxDBMemoryArgs](#apidocs/interfaceaxdbmemoryargs)
- [AxDBPineconeArgs](#apidocs/interfaceaxdbpineconeargs)
- [AxDBQueryService](#apidocs/interfaceaxdbqueryservice)
- [AxDBService](#apidocs/interfaceaxdbservice)
- [AxDBWeaviateArgs](#apidocs/interfaceaxdbweaviateargs)
- [AxDockerContainer](#apidocs/interfaceaxdockercontainer)
- [AxField](#apidocs/interfaceaxfield)
- [AxGenOptions](#apidocs/interfaceaxgenoptions)
- [AxProgramWithSignatureOptions](#apidocs/interfaceaxprogramwithsignatureoptions)
- [AxRateLimiterTokenUsageOptions](#apidocs/interfaceaxratelimitertokenusageoptions)
- [AxResponseHandlerArgs](#apidocs/interfaceaxresponsehandlerargs)
- [AxRouterForwardOptions](#apidocs/interfaceaxrouterforwardoptions)
- [AxStreamingAssertion](#apidocs/interfaceaxstreamingassertion)
- [AxTunable](#apidocs/interfaceaxtunable)
- [AxUsable](#apidocs/interfaceaxusable)

## Type Aliases

- [AxAgentOptions](#apidocs/typealiasaxagentoptions)
- [AxAIAnthropicChatError](#apidocs/typealiasaxaianthropicchaterror)
- [AxAIAnthropicChatRequest](#apidocs/typealiasaxaianthropicchatrequest)
- [AxAIAnthropicChatRequestCacheParam](#apidocs/typealiasaxaianthropicchatrequestcacheparam)
- [AxAIAnthropicChatResponse](#apidocs/typealiasaxaianthropicchatresponse)
- [AxAIAnthropicChatResponseDelta](#apidocs/typealiasaxaianthropicchatresponsedelta)
- [AxAIAnthropicConfig](#apidocs/typealiasaxaianthropicconfig)
- [AxAIArgs](#apidocs/typealiasaxaiargs)
- [AxAICohereChatRequest](#apidocs/typealiasaxaicoherechatrequest)
- [AxAICohereChatRequestToolResults](#apidocs/typealiasaxaicoherechatrequesttoolresults)
- [AxAICohereChatResponse](#apidocs/typealiasaxaicoherechatresponse)
- [AxAICohereChatResponseDelta](#apidocs/typealiasaxaicoherechatresponsedelta)
- [AxAICohereChatResponseToolCalls](#apidocs/typealiasaxaicoherechatresponsetoolcalls)
- [AxAICohereConfig](#apidocs/typealiasaxaicohereconfig)
- [AxAICohereEmbedRequest](#apidocs/typealiasaxaicohereembedrequest)
- [AxAICohereEmbedResponse](#apidocs/typealiasaxaicohereembedresponse)
- [AxAIEmbedModels](#apidocs/typealiasaxaiembedmodels)
- [AxAIGoogleGeminiBatchEmbedRequest](#apidocs/typealiasaxaigooglegeminibatchembedrequest)
- [AxAIGoogleGeminiBatchEmbedResponse](#apidocs/typealiasaxaigooglegeminibatchembedresponse)
- [AxAIGoogleGeminiChatRequest](#apidocs/typealiasaxaigooglegeminichatrequest)
- [AxAIGoogleGeminiChatResponse](#apidocs/typealiasaxaigooglegeminichatresponse)
- [AxAIGoogleGeminiChatResponseDelta](#apidocs/typealiasaxaigooglegeminichatresponsedelta)
- [AxAIGoogleGeminiConfig](#apidocs/typealiasaxaigooglegeminiconfig)
- [AxAIGoogleGeminiContent](#apidocs/typealiasaxaigooglegeminicontent)
- [AxAIGoogleGeminiGenerationConfig](#apidocs/typealiasaxaigooglegeminigenerationconfig)
- [AxAIGoogleGeminiSafetySettings](#apidocs/typealiasaxaigooglegeminisafetysettings)
- [AxAIGoogleGeminiTool](#apidocs/typealiasaxaigooglegeminitool)
- [AxAIGoogleGeminiToolConfig](#apidocs/typealiasaxaigooglegeminitoolconfig)
- [AxAIGoogleGeminiToolFunctionDeclaration](#apidocs/typealiasaxaigooglegeminitoolfunctiondeclaration)
- [AxAIGoogleGeminiToolGoogleSearchRetrieval](#apidocs/typealiasaxaigooglegeminitoolgooglesearchretrieval)
- [AxAIHuggingFaceConfig](#apidocs/typealiasaxaihuggingfaceconfig)
- [AxAIHuggingFaceRequest](#apidocs/typealiasaxaihuggingfacerequest)
- [AxAIHuggingFaceResponse](#apidocs/typealiasaxaihuggingfaceresponse)
- [AxAIModelMap](#apidocs/typealiasaxaimodelmap)
- [AxAIModels](#apidocs/typealiasaxaimodels)
- [AxAIOllamaAIConfig](#apidocs/typealiasaxaiollamaaiconfig)
- [AxAIOllamaArgs](#apidocs/typealiasaxaiollamaargs)
- [AxAIOpenAIChatRequest](#apidocs/typealiasaxaiopenaichatrequest)
- [AxAIOpenAIChatResponse](#apidocs/typealiasaxaiopenaichatresponse)
- [AxAIOpenAIChatResponseDelta](#apidocs/typealiasaxaiopenaichatresponsedelta)
- [AxAIOpenAIConfig](#apidocs/typealiasaxaiopenaiconfig)
- [AxAIOpenAIEmbedRequest](#apidocs/typealiasaxaiopenaiembedrequest)
- [AxAIOpenAIEmbedResponse](#apidocs/typealiasaxaiopenaiembedresponse)
- [AxAIOpenAILogprob](#apidocs/typealiasaxaiopenailogprob)
- [AxAIOpenAIUsage](#apidocs/typealiasaxaiopenaiusage)
- [AxAIPromptConfig](#apidocs/typealiasaxaipromptconfig)
- [AxAIRekaChatRequest](#apidocs/typealiasaxairekachatrequest)
- [AxAIRekaChatResponse](#apidocs/typealiasaxairekachatresponse)
- [AxAIRekaChatResponseDelta](#apidocs/typealiasaxairekachatresponsedelta)
- [AxAIRekaConfig](#apidocs/typealiasaxairekaconfig)
- [AxAIRekaUsage](#apidocs/typealiasaxairekausage)
- [AxAIServiceActionOptions](#apidocs/typealiasaxaiserviceactionoptions)
- [AxAIServiceOptions](#apidocs/typealiasaxaiserviceoptions)
- [AxAPI](#apidocs/typealiasaxapi)
- [AxBalancerOptions](#apidocs/typealiasaxbalanceroptions)
- [AxChatRequest](#apidocs/typealiasaxchatrequest)
- [AxChatResponse](#apidocs/typealiasaxchatresponse)
- [AxChatResponseFunctionCall](#apidocs/typealiasaxchatresponsefunctioncall)
- [AxChatResponseResult](#apidocs/typealiasaxchatresponseresult)
- [AxDataRow](#apidocs/typealiasaxdatarow)
- [AxDBArgs](#apidocs/typealiasaxdbargs)
- [AxDBCloudflareOpOptions](#apidocs/typealiasaxdbcloudflareopoptions)
- [AxDBMemoryOpOptions](#apidocs/typealiasaxdbmemoryopoptions)
- [AxDBPineconeOpOptions](#apidocs/typealiasaxdbpineconeopoptions)
- [AxDBQueryRequest](#apidocs/typealiasaxdbqueryrequest)
- [AxDBQueryResponse](#apidocs/typealiasaxdbqueryresponse)
- [AxDBState](#apidocs/typealiasaxdbstate)
- [AxDBUpsertRequest](#apidocs/typealiasaxdbupsertrequest)
- [AxDBUpsertResponse](#apidocs/typealiasaxdbupsertresponse)
- [AxDBWeaviateOpOptions](#apidocs/typealiasaxdbweaviateopoptions)
- [AxEmbedRequest](#apidocs/typealiasaxembedrequest)
- [AxEmbedResponse](#apidocs/typealiasaxembedresponse)
- [AxEvaluateArgs](#apidocs/typealiasaxevaluateargs)
- [AxExample](#apidocs/typealiasaxexample)
- [AxFieldTemplateFn](#apidocs/typealiasaxfieldtemplatefn)
- [AxFieldValue](#apidocs/typealiasaxfieldvalue)
- [AxFunction](#apidocs/typealiasaxfunction)
- [AxFunctionExec](#apidocs/typealiasaxfunctionexec)
- [AxFunctionHandler](#apidocs/typealiasaxfunctionhandler)
- [AxFunctionJSONSchema](#apidocs/typealiasaxfunctionjsonschema)
- [AxGenerateResult](#apidocs/typealiasaxgenerateresult)
- [AxGenIn](#apidocs/typealiasaxgenin)
- [AxGenOut](#apidocs/typealiasaxgenout)
- [AxIField](#apidocs/typealiasaxifield)
- [AxInputFunctionType](#apidocs/typealiasaxinputfunctiontype)
- [AxInternalChatRequest](#apidocs/typealiasaxinternalchatrequest)
- [AxInternalEmbedRequest](#apidocs/typealiasaxinternalembedrequest)
- [AxMetricFn](#apidocs/typealiasaxmetricfn)
- [AxMetricFnArgs](#apidocs/typealiasaxmetricfnargs)
- [AxModelConfig](#apidocs/typealiasaxmodelconfig)
- [AxModelInfo](#apidocs/typealiasaxmodelinfo)
- [AxModelInfoWithProvider](#apidocs/typealiasaxmodelinfowithprovider)
- [AxOptimizerArgs](#apidocs/typealiasaxoptimizerargs)
- [AxProgramDemos](#apidocs/typealiasaxprogramdemos)
- [AxProgramExamples](#apidocs/typealiasaxprogramexamples)
- [AxProgramForwardOptions](#apidocs/typealiasaxprogramforwardoptions)
- [AxProgramTrace](#apidocs/typealiasaxprogramtrace)
- [AxProgramUsage](#apidocs/typealiasaxprogramusage)
- [AxRateLimiterFunction](#apidocs/typealiasaxratelimiterfunction)
- [AxRerankerIn](#apidocs/typealiasaxrerankerin)
- [AxRerankerOut](#apidocs/typealiasaxrerankerout)
- [AxRewriteIn](#apidocs/typealiasaxrewritein)
- [AxRewriteOut](#apidocs/typealiasaxrewriteout)
- [AxTokenUsage](#apidocs/typealiasaxtokenusage)
