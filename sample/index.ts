import { addInspectorPlugin, createModuleInspector } from "@coretools/inspector";
import httpInspectorPlugin from "..";
import { HTTPLoggingMode } from "../lib/enum/HTTPLoggingMode.enum";

addInspectorPlugin(httpInspectorPlugin({
    url: "https://webhook.site/4391dae4-d4fc-470a-9e4e-1f64f72d6a97",
    method: "POST",
    headers: {},
    loggingMode: HTTPLoggingMode.Tagged,
    tags: ["http"]
}));

const SampleLogger = createModuleInspector("SAMPLE");

SampleLogger.method("main").log({
    type: "start"
});