import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import { CartListComponent } from "./cart/components/cart-list/cart-list.component";
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { Constants, ConstantsServiceToken } from "./core/services/constant.service";

// Я использую текой порядок следования свойств
// Мое имя selector
// Мой тип standalone
// Я завищу от imports
// В моем templateUrl
// используются styleUrls
@Component({
    standalone: true,
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    imports: [CartListComponent, ProductListComponent]
})
export class AppComponent implements OnInit, AfterViewInit {

    private title: string = "";
    @ViewChild("appTitle", { static: true }) appTitle!: ElementRef<HTMLHeadingElement>;

    constructor(@Inject(ConstantsServiceToken) private constants: Constants) {
    }

    ngOnInit(): void {
       this.title = `${this.constants.App} v${this.constants.Version}`;
    }

    ngAfterViewInit() {
        this.appTitle.nativeElement.textContent = this.title;
    }
}
