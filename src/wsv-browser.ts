/* (C) Stefan John / Stenway / WhitespaceSV.com / 2022 */

import { WsvDocument } from "@stenway/wsv"

// ----------------------------------------------------------------------

export abstract class WsvDownload {
	static getDownloadUrl(document: WsvDocument): string {
		const bytes: Uint8Array = document.getBytes()
		const blob: Blob = new Blob([bytes], { type: 'text/plain' })
		return URL.createObjectURL(blob)
	}
	
	static download(wsvDocument: WsvDocument, fileName: string) {
		const url = WsvDownload.getDownloadUrl(wsvDocument)
		const element = document.createElement('a')
		element.href = url
		element.download = fileName
		element.style.display = 'none'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
	}
}