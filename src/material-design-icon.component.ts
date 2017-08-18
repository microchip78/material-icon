import { Component, Input } from '@angular/core';

@Component({
	selector: 'mdi',
	template: `<i class="material-icons" [style.font-size]="size + 'px'" [innerHtml]="icon"></i>`,
	host: {
		'[style.height.px]': 'size',
		'[style.width.px]': 'size'
	}
})
export class MaterialDesignIconComponent {
	@Input() icon: string;
	@Input() size = 24;
}
