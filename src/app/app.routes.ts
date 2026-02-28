import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products/products').then((m) => m.Products),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout/checkout').then((m) => m.Checkout),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart/cart').then((m) => m.Cart),
  },
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/auth/auth').then((m) => m.Auth),
  },
  {
    path: 'offers',
    loadComponent: () => import('./features/offers/offers/offers').then((m) => m.Offers),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
