import { WsvDocument } from "@stenway/wsv"
import { WsvDownload } from "../src"

test("WsvDownload.getDownloadUrl", () => {
	const document = WsvDocument.parse("Test")
	WsvDownload.getDownloadUrl(document)
})

test("WsvDownload.download", () => {
	const document = WsvDocument.parse("Test")
	expect(() => WsvDownload.download(document, "File.wsv")).toThrowError()
})