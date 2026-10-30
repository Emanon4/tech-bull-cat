import Foundation
import Vision
let dir = URL(fileURLWithPath:CommandLine.arguments[1])
let paths = try FileManager.default.contentsOfDirectory(at:dir,includingPropertiesForKeys:nil).filter{$0.pathExtension == "png"}.sorted{$0.path < $1.path}
var failures:[String]=[]
for url in paths {
  let id=url.deletingPathExtension().lastPathComponent
  let request=VNDetectBarcodesRequest()
  request.symbologies=[.qr]
  try VNImageRequestHandler(url:url,options:[:]).perform([request])
  let values=(request.results ?? []).compactMap{$0.payloadStringValue}
  if !values.contains("https://www.douyin.com/video/"+id) {failures.append(id)}
}
print("QR images scanned: \(paths.count); failures: \(failures)")
if !failures.isEmpty {exit(1)}
