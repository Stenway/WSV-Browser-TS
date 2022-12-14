"use strict";
/* (C) Stefan John / Stenway / WhitespaceSV.com / 2022 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsvDownload = void 0;
// ----------------------------------------------------------------------
class WsvDownload {
    static getDownloadUrl(document) {
        const bytes = document.getBytes();
        const blob = new Blob([bytes], { type: 'text/plain' });
        return URL.createObjectURL(blob);
    }
    static download(wsvDocument, fileName) {
        const url = WsvDownload.getDownloadUrl(wsvDocument);
        const element = document.createElement('a');
        element.href = url;
        element.download = fileName;
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
exports.WsvDownload = WsvDownload;
//# sourceMappingURL=wsv-browser.js.map