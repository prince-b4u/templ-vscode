import { FoldingRangeFeature } from "vscode-languageclient/lib/common/foldingRange";
import {
  type DynamicFeature,
  LanguageClient,
  type StaticFeature,
} from "vscode-languageclient/node";

export class CustomLanguageClient extends LanguageClient {
  public registerFeature(feature: StaticFeature | DynamicFeature<any>): void {
    // Templ does not have a folding implementation
    // so we prevent the client from registering it
    // causing vscode to use it's default folding, which is good enough
    if (feature instanceof FoldingRangeFeature) {
      return;
    }
    super.registerFeature(feature);
  }
}
