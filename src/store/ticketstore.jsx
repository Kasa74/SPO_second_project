import { makeAutoObservable } from "mobx";

export default class TicketStore {
  constructor() {
    this._hotels = [];
    this._flights = [];
    this._news = [];
    this._selectedHotel = { price: 0 };
    this._selectedFlight = { price: 0 };
    this._selectedTicketID = 0;
    this._orderID = "";
    makeAutoObservable(this);
  }

  setHotels(hotels) {
    this._hotels = hotels;
  }

  setFlights(flights) {
    this._flights = flights;
  }

  setNews(news) {
    this._news = news;
  }

  setSelectedHotel(hotel) {
    this._selectedHotel = hotel;
  }

  setSelectedFlight(flight) {
    this._selectedFlight = flight;
  }

  setSelectedTicketID(id) {
    this._selectedTicketID = id;
  }

  setOrderID(id) {
    this._orderID = id;
  }

  get Hotels() {
    return this._hotels;
  }

  get Flights() {
    return this._flights;
  }

  get News() {
    return this._news;
  }

  get SelectedHotel() {
    return this._selectedHotel;
  }

  get SelectedFlight() {
    return this._selectedFlight;
  }

  get SelectedTicketID() {
    return this._selectedTicketID;
  }

  get OrderID() {
    return this._orderID;
  }
}
