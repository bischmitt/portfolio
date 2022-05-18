import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('Email bischmitt98@gmail.com copiado com sucesso!', undefined,{duration: 3000, verticalPosition:'top', panelClass: ['pink-snackbar']})
  }

  ngOnInit(): void {
  }

  value =`bischmitt98@gmail.com`;

}
