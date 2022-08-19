export interface Flight {
    id: number;
    departureTime: any;
    departureAirport: string;
    arrivalTime: any;
    arrivalAirport: string;
    maxCapacity: number;
    passengersBooked:number;
}

export interface FlightDTO {
    departureTime: any;
    departureAirport: string;
    arrivalTime: any;
    arrivalAirport: string;
    maxCapacity: number;
}