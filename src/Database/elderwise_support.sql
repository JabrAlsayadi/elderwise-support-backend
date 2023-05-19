/**
* @author: https://github.com/GabrSayadi
*/

drop database if exists elderwise_support;
create database if not exists elderwise_support;

-- use database 
use elderwise_support;

create table if not exists user
(
    id           bigint auto_increment comment 'id' primary key,
    userName     varchar(255)                           not null comment 'user Name',
    userAccount  varchar(255)                           not null comment 'user Account: phone / email',
    userRole     varchar(255) default 'user'            not null comment 'user role: admin',
    userPassword varchar(255)                           not null comment 'password',
    createAt     datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt     datetime     default CURRENT_TIMESTAMP not null comment 'update time'
)
    comment 'user';

create table if not exists medical_registration (
    id           bigint auto_increment comment 'id' primary key,
    hospitalName        varchar(255)          not null comment 'hospital name', 
    createUser          bigint                not null comment 'create user',
    hospitalAddress     varchar(255)          not null comment 'hospital address',
    registrationType    varchar(255)          not null comment 'type: internal medicine , surgery',
    doctorName          varchar(255)          not null comment 'doctor name',
    fee                 int(8)                not null comment 'registration fee',
    registrationStatus  int(4) default 0      not null comment 'registration status: 0, 1 ',
    registrationAt      datetime   default CURRENT_TIMESTAMP not null comment 'registration time ',
    createAt            datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt            datetime     default CURRENT_TIMESTAMP not null comment 'update time',
    paymentStatus        int(4) default 0      not null comment 'payment status: 0:false , 1:ture'
)
    comment 'medical registration';


create table if not exists buy_medical (
    id           bigint auto_increment comment 'id' primary key,
    medicineName         varchar(255)          not null comment 'medicine name ',
    createUser          bigint                not null comment 'create user',
    medicinePrice        varchar(255)          not null comment 'medicine price ',
    medicineCount        int(8)                not null comment 'count of order',
    medicineType         varchar(255)          not null comment 'type: internal medicine , surgery',
    paymentStatus        int(4) default 0      not null comment 'payment status: 0:false , 1:ture',
    createAt             datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt             datetime     default CURRENT_TIMESTAMP not null comment 'update time'
)
    comment 'buy medical';


create table if not exists phones (
    id                    bigint auto_increment comment 'id' primary key,
    createUser            bigint                not null comment 'create user',
    agencyName            varchar(255)          not null comment 'agency name',
    phoneNumber           varchar(255)          not null comment 'phone number',
    createAt              datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt              datetime     default CURRENT_TIMESTAMP not null comment 'update time'
)
    comment 'phones numbers';

create table if not exists hospital_check_in (
    id           bigint auto_increment comment 'id' primary key,
    hospitalName            varchar(255)          not null comment 'hospital name',
    createUser          bigint                not null comment 'create user',
    hospitalAddress         varchar(255)          not null comment 'hospital address ',
    medicineType            varchar(255)          not null comment 'Type: internal medicine , surger',
    roomType                varchar(255)          not null comment 'room type: VIP - normal',
    bedNumber               int(8)                not null comment 'bed number',
    floorNumber             int(8)                not null comment 'floor number',
    roomNumber              int(8)                not null comment 'room number',
    fee                     int(10)               not null comment 'fee per day',
    reservationAt           datetime     default CURRENT_TIMESTAMP not null comment 'reservation time',
    updateAt                datetime     default CURRENT_TIMESTAMP not null comment 'update time',
    checkInAt               datetime     default CURRENT_TIMESTAMP not null comment 'checkin time',
    checkOutAt              datetime     default CURRENT_TIMESTAMP not null comment 'checkout time',
    paymentStatus           int(4) default 0      not null comment 'payment status'
)
    comment 'hospital checkIn';

create table if not exists order_hospital_check_in (
    id           bigint auto_increment comment 'id' primary key,
    hospitalName            varchar(255)          not null comment 'hospital name',
    createUser          bigint                not null comment 'create user',
    hospitalAddress         varchar(255)          not null comment 'hospital address ',
    medicineType            varchar(255)          not null comment 'Type: internal medicine , surger',
    roomType                varchar(255)          not null comment 'room type: VIP - normal',
    bedNumber               int(8)                not null comment 'bed number',
    floorNumber             int(8)                not null comment 'floor number',
    roomNumber              int(8)                not null comment 'room number',
    fee                     int(10)               not null comment 'fee per day',
    reservationAt           datetime     default CURRENT_TIMESTAMP not null comment 'reservation time',
    updateAt                datetime     default CURRENT_TIMESTAMP not null comment 'update time',
    checkInAt               datetime     default CURRENT_TIMESTAMP not null comment 'checkin time',
    checkOutAt              datetime     default CURRENT_TIMESTAMP not null comment 'checkout time',
    paymentStatus           int(4) default 0      not null comment 'payment status'
)
    comment 'order hospital checkIn';


create table if not exists order_buy_medical (
    id           bigint auto_increment comment 'id' primary key,
    medicineName         varchar(255)          not null comment 'medicine name ',
    createUser          bigint                not null comment 'create user',
    medicinePrice        varchar(255)          not null comment 'medicine price ',
    medicineCount        int(8)                not null comment 'count of order',
    medicineType         varchar(255)          not null comment 'type: internal medicine , surgery',
    paymentStatus        int(4) default 0      not null comment 'payment status: 0:false , 1:ture',
    createAt             datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt             datetime     default CURRENT_TIMESTAMP not null comment 'update time'
)
    comment 'order buy medical';

create table if not exists order_user_registration (
    id           bigint auto_increment comment 'id' primary key,
    hospitalName        varchar(255)          not null comment 'hospital name', 
    createUser          bigint                not null comment 'create user',
    hospitalAddress     varchar(255)          not null comment 'hospital address',
    registrationType    varchar(255)          not null comment 'type: internal medicine , surgery',
    doctorName          varchar(255)          not null comment 'doctor name',
    fee                 int(8)                not null comment 'registration fee',
    registrationStatus  int(4) default 0      not null comment 'registration status: 0, 1 ',
    registrationAt      datetime   default CURRENT_TIMESTAMP not null comment 'registration time ',
    createAt            datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt            datetime     default CURRENT_TIMESTAMP not null comment 'update time',
    paymentStatus        int(4) default 0      not null comment 'payment status: 0:false , 1:ture'
)
    comment 'order medical registration';