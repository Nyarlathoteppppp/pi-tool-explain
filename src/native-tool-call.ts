import type { Component } from "@earendil-works/pi-tui";
import { truncateToWidth } from "@earendil-works/pi-tui";

/** Keep Pi's component available for its next partial-render update. */
export class NativeToolCallWithSummary implements Component {
	constructor(
		readonly nativeCall: Component,
		private readonly summary: string,
	) {}

	render(width: number): string[] {
		if (width <= 0) return [];
		const lines = this.nativeCall.render(width);
		return this.summary ? [...lines, truncateToWidth(this.summary, width, "")] : lines;
	}

	invalidate(): void {
		this.nativeCall.invalidate();
	}
}
