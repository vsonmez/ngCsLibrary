<h1>NgCsLibrary</h1>
<p>This library contains web components created for use in angular (8.0.3) projects.</p>
<p>It is still under development.</p>
<h2>Requirements</h2>
<ul>
<li>
<b>Bootstrap 4.3.1</b>
<br>
<code>
<pre>
&ltlink rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/&gt
</pre>
</code>
</li>
<li>
<b>Fontawesome 5.11.2</b>
<br> 
<code>
<pre>
&ltlink rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous"/&gt
</pre>
</code>
</li>
</ul>
<h2>Install</h2>
<code>
<pre>
npm i ng-cs-library
</pre>
</code>
<h2>Usage</h2>
<p>You need to import the NgCsLibraryModule to the module where the library will be used.</p>
<code>
<pre>
import { NgCsLibraryModule } from "ng-cs-library";
</pre>
</code>
<hr>
<code>
<pre>
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, NgCsLibraryModule],
	providers: [],
	bootstrap: [AppComponent]
})
</pre>
</code>
<h2>Components</h2>
<ul>
	<li>
		<a href="#spinner">Spinner</a>
	</li>
	<li>
		<a href="#panel">Panel</a>
	</li>
	<li>
		<a href="#modal">Modal</a>
	</li>
	<li>
		<a href="#notification">Notification</a>
	</li>
</ul>
<h3 id="spinner">Spinner</h3>
<b>Description</b>
<p>This is to be shown when http request is made.</p>
<b>Inputs</b>
<br>
<i>@show: boolean</i>
<br>
<i>default: false</i>
<br>
<p>Show property takes a boolean value. When true, the spinner is shown.</p>
<hr>
<i>@icon: string</i>
<br>
<i>default: "spinner"</i>
<br>
<p>Changes the spinner icon. You can use the fontawesome 5 icons.</p>
<b>Usage</b>
<code>
<pre>
&ltcs-spinner [show]="true" icon="asterisk"&gt&lt/cs-spinner&gt
</pre>
</code>
<h3 id="panel">Panel</h3>
<b>Description</b>
<p>Panel looks like bootstrap 4.</p>
<b>Inputs</b>
<br>
<i>@panelTitle: string</i>
<br>
<i>default: undefined</i>
<br>
<p>Determines the panel title.</p>
<hr>
<i>@canToggle: boolean</i>
<br>
<i>default: false</i>
<br>
<p>Determines whether the panel content is toggle.</p>
<hr>
<i>@isExpanded: boolean</i>
<br>
<i>default: false</i>
<br>
<p>Determines whether content is visible when the panel is first created.</p>
<hr>
<i>@theme: "default" | "primary" | "secondary" | "success" | "danger" | "info" | "dark"</i>
<br>
<i>default: "default"</i>
<br>
<p>Determines the theme of the panel.</p>
<b>Usage</b>
<code>
<pre>
&ltcs-panel panelTitle="Main Page" [canToggle]="true" [isExpanded]="false" theme="secondary"&gt
  &ltdiv body&gt
  	Panel Body
  &lt/div&gt
  &ltdiv footer&gt
  	Panel Footer
  &lt/div&gt
&lt/cs-panel&gt
</pre>
</code>
<h3 id="modal">Modal</h3>
<b>Description</b>
<p>Modal looks like bootstrap 4</p>
<b>Inputs</b>
<br>
<i>@show: boolean</i>
<br>
<i>default: false</i>
<br>
<p>When true, the modal is shown.</p>
<hr>
<i>@routerLinkString: string</i>
<br>
<i>default: undefined</i>
<br>
<p>When the close button in the modal header is clicked, it determines which url to go to.</p>
<hr>
<i>@modalTitle: string</i>
<br>
<i>default: undefined</i>
<br>
<p>Determines the modal title.</p>
<hr>
<i>@isLG: boolean</i>
<br>
<i>default: false</i>
<br>
<p>Determines the modal width (max-width: 800px).</p>
<hr>
<i>@isXL: boolean</i>
<br>
<i>default: false</i>
<br>
<p>Determines the modal width (max-width: 90%).</p>
<b>Usage</b>
<code>
<pre>
&ltcs-modal [show]="true" modalTitle="My Modal" routerLinkString="/home"&gt
  &ltdiv body&gt
    Modal Body
  &lt/div&gt
  &ltdiv footer&gt
	&ltbutton class="btn btn-sm btn-success"&gtDone&lt/button&gt
  &lt/div&gt
&lt/cs-modal&gt
</pre>
</code>
<h3 id="notification">Notification</h3>
<b>Description</b>
<p>Can be used to show notifications through the library service.</p>
<b>Inputs</b>
<br>
<i>@notifications: I_Notification[]</i>
<br>
<i>default: undefined</i>
<code>
<pre>
type NotificationTypes = "danger" | "info" | "success" | "default"
export interface I_Notification {
	text: string;
	type?: NotificationTypes;
}
</pre>
</code>
<hr>
<b>Usage</b>
<code>
<pre>
 &ltcs-notification&gt&lt/cs-notification&gt
</pre>
</code>
<p>You need to inject the library service where you want to use it.</p>
<code>
<pre>
 constructor(private libraryService: NgCsLibraryService) {}
</pre>
</code>
<p>To show notifications, you must subscribe to the notifications object in the service.</p>
<i>@notifications: BehaviorSubject&ltI_Notification[]&gt</i>
<code>
<pre>
constructor(private libraryService: NgCsLibraryService) {}
ngOnInit(){
	this.libraryService.addNotification({
			text: "App init...",
			type: "info"
	});
}
</pre>
</code>
<b>Methods</b>
<br>
<i>@addNotification(notification: I_Notification): void</i>
<br>
<p>You can add notifications of type I_Notification.</p>
<hr>
<i>@removeNotification(notification: I_Notification): void</i>
<br>
<p>You can remove notifications of type I_Notification.</p>
<hr>
<i>@clearNotifications(): void</i>
<br>
<p>Deletes all notifications.</p>