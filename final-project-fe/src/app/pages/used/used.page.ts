import { Component, OnInit } from '@angular/core';
import { Used } from 'src/app/interfaces/used';
import { UsedCarApiService } from 'src/app/services/used-car-api.service';

@Component({
  templateUrl: './used.page.html',
  styleUrls: ['./used.page.scss'],
})
export class UsedPage implements OnInit {
  constructor(private usedCarApiService: UsedCarApiService) {}
  carList!: Used[];
  carDetails?: Used;
  searchText: string = '';

  ngOnInit(): void {
    this.usedCarApiService.getAllCar().subscribe(
      (data: Used[]) => (this.carList = data),
      (error) => alert('  ERROR:503 Service Unavailable')
    );
  }
  onDetails(item: Used) {
    this.carDetails = item;
  }
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
  pay(prezzo: Used) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MBb5SH7ocw78Ezlyf2imJT8xBmMBbMY7c8jVTRb1EBrtAPjkkPjbDxmlSl6dXyKTurtxsZLonH16N9MnGistTMP00Lf6vyuOy',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.

        alert("Pagamento eseguito con successo, grazie per l'acquisto");
      },
    });

    handler.open({
      name: 'Demo Site',
      description: 'Pagamento Stripe',
      amount: prezzo,
    });
  }
  deleteCar(i: number) {
    this.usedCarApiService.deleteCar(i).subscribe();
    this.carList?.splice(i, 1);
  }
}
