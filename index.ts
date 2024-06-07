import { LoggingMode } from "./lib/enum/LoggingMode.enum";
import { ModuleInspectorMessage } from "@coretools/inspector/dist/src/createModuleInspector";
import Axios from "axios";

export interface HTTPInspectorOptions {
    url: string;
    method: string;
    headers?: Record<string, string>;
    loggingMode?: LoggingMode;
    tags?: string[];
}

export default function httpInspectorPlugin (options: HTTPInspectorOptions) {
    const tags = options.tags ?? ["http"];
    
    return (message: ModuleInspectorMessage & { module: string }) => {
        if (options.loggingMode === LoggingMode.Tagged && !tags?.includes("http")) return;
        if (options.loggingMode === LoggingMode.Everything && tags?.includes("-http")) return;

        Axios({
            method: options.method,
            url: options.url,
            headers: options.headers,
            data: message
        })
    };
}