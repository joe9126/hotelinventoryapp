export interface Room{
   
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomsList{
    roomid: number;
    roomType: string;
    price: number;
    amenities: string;
    checkindate:Date;
    checkoutdate: Date;
    rating: number;
}