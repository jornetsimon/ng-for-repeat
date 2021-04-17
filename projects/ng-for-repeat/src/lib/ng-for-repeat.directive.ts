import { Directive, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Directive({
	selector: '[ngFor][ngForRepeat],[ngForRepeat]',
})
export class NgForRepeatDirective<T> extends NgForOf<T> {
	@Input() set ngForRepeat(repeat: number) {
		this.ngForOf = new Array(repeat >= 0 ? repeat : 0);
	}
}
