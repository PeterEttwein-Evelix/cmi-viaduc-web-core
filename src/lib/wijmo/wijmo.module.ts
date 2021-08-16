import {NgModule} from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.angular2.grid';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import {WjGridGrouppanelModule} from '@grapecity/wijmo.angular2.grid.grouppanel';
import {WjCoreModule} from '@grapecity/wijmo.angular2.core';
import {WjAutoComplete} from '@grapecity/wijmo.angular2.input';
import {ALL_SERVICES} from './services/_all';
import {ALL_COMPONENTS} from './components/_all';
import JSZip from 'jszip';
import {CommonModule} from '@angular/common';
window['JSZip'] = JSZip;

@NgModule({
	declarations: [ALL_COMPONENTS],
	imports: [
		CommonModule,
		WjInputModule,
		WjGridFilterModule,
		WjGridModule
	],
	exports: [
		WjInputModule,
		WjCoreModule,
		WjGridModule,
		WjAutoComplete,
		WjGridFilterModule,
		WjGridGrouppanelModule,
		wjGrid.WjFlexGridCellTemplate,
		...ALL_COMPONENTS
	],
	providers: [
		...ALL_SERVICES
	]
})

export class WijmoModule {
	constructor() {
		// tslint:disable-next-line:max-line-length
		wjcCore.setLicenseKey('CM Informatik AG,viaductest.cmiag.ch|www.viaduc.cmiag.ch|www.viaducdev.cmiag.ch|viaducdev.cmiag.ch|recherche.bar.admin.ch|recherche-r.bar.admin.ch|www.recherche-bar.admin.ch|viaduc.cmiag.ch|www.recherche.bar.admin.ch|recherche-a.bar.admin.ch|www.viaductest.cmiag.ch|www.recherche-a.bar.admin.ch|recherche-bar.admin.ch|www.recherche-r.bar.admin.ch,512352288721482#B0iyoTNzITM5IiOiQWSiwSfiEjdwIDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnJGajNVb8xUVqpHRTVVTTlUMtlzaMVVORF4QE3GenR6azcUby5kTzg4KIZzMDJmUmllVKFjMzZlY5d5YvlmdJRDdmJWYGFFdThDRaJUaPJnZhZ5c6tyZh9WdOtSZMdHcxhkR4gDW7MFa8B7VQplNNBXWkJzY6AnVrMnMwc7dLN7Y4lXejFXZYZTUyBjMh3CcTpHRulkdlNGSotGeUpnQ9FFNMJWNGVlUxg5RGFEZMpkRlJzVUhjcvFHMVxWU6xUUOpUd9Y6dDJ5ZOVlUpxke4BnWUVFbOpVTyIldoJXds5UT4pXTL94R5gmbU9mVJRnYp3mN6tGejZUV6dnW9QnWER6YmFlaIN7b7UXT7MHcvQke7lHc43SbHhkUT56SQRzVX5kVWBjTKJjctNERTFlem56NJJGehV5V5smbw4Ea7R6ctxmYl3Ub5Y4MVplUldjY8smexJlSiojITJCLikjNwEUMFN4MiojIIJCLxMzM7kjMwczN0IicfJye&Qf35VfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1tlOiQmcQJCLigzM6QDNwASOwMDMwIDMyIiOiQncDJCLig6Yu8WatRWYuIXYi9ictUGajJXZoNWZy9yd7dHLoNmLulWbkFmLyFmYtUGajJXZoNWZyxCaj9ibp5GZh9ichJmLh5SZoNmclh6YlJnL7d7dsg6YucWYp56YuQ7clR7Y5RWYpZnL7d7dsg6Yu8WatRWYuIXYi9SYtUGajJXZoNWZyxCaj9ibp5GZh9ichJmLlh6YyVGajVmcuc7d7xCaj9yZhlWbj9yY5RWYpZHLoNmLulWbkFmLyFmYtUGajJXZoNWZy9yd7dHLoNmLulWbkFmLyFmYuIXLlh6YyVGajVmcsg6Yu8WatRWYuIXYi9SZoNmclh6YlJHLoNmLnFWatNmL6VGZjVHZhlmdsg6YucWYp56YuYXZkNWdkFWa69yd7dHLoNmLnFWatNmLjVHZhlmduc7d7xCaj9yZhlWbj9CdzVGdjVHZhlmdiojIz5GRiwiIHFEIrlGdh5mcvZmbJBSTDJiOiEmTDJCLiIDO4EjG5mD');
	}
}
