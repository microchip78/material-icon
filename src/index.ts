import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignIconComponent } from './material-design-icon.component';

export * from './material-design-icon.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		MaterialDesignIconComponent,
	],
	exports: [
		MaterialDesignIconComponent,
	]
})
export class MaterialDesignIconModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: MaterialDesignIconModule,
		};
	}
}
