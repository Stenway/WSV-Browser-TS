import { WsvDocument } from "@stenway/wsv";
export declare abstract class WsvDownload {
    static getDownloadUrl(document: WsvDocument): string;
    static download(wsvDocument: WsvDocument, fileName: string): void;
}
//# sourceMappingURL=wsv-browser.d.ts.map