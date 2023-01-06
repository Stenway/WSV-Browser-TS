"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wsv_1 = require("@stenway/wsv");
const src_1 = require("../src");
test("WsvDownload.getDownloadUrl", () => {
    const document = wsv_1.WsvDocument.parse("Test");
    src_1.WsvDownload.getDownloadUrl(document);
});
test("WsvDownload.download", () => {
    const document = wsv_1.WsvDocument.parse("Test");
    expect(() => src_1.WsvDownload.download(document, "File.wsv")).toThrowError();
});
//# sourceMappingURL=wsv-browser.test.js.map