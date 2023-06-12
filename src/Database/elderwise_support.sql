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

create table if not exists hospitals (
    id                  bigint auto_increment comment 'id' primary key,
    createUser          bigint                not null comment 'create user',
    hospitalName        varchar(255)          not null comment 'hospital name',
    hospitalAddress     varchar(255)          not null comment 'hospital address',
    hospitalDesc        varchar(255)          not null comment 'hospital description',
    createAt            datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt            datetime     default CURRENT_TIMESTAMP not null comment 'update time',

    FOREIGN KEY (createUser) REFERENCES user(id)
) 
    comment 'hospitals';

create table if not exists medical_registration (
    id                  bigint auto_increment comment 'id' primary key,
    hospitalId          bigint                not null comment 'hospital id',
    createUser          bigint                not null comment 'create user',
    registrationType    varchar(255)          not null comment 'type: internal medicine , surgery',
    doctorName          varchar(255)          not null comment 'doctor name',
    doctorDesc          varchar(255)          not null comment 'doctor description',
    doctorImgUrl        varchar(255)          not null comment 'doctor image url',
    fee                 int(8)                not null comment 'registration fee',
    createAt            datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt            datetime     default CURRENT_TIMESTAMP not null comment 'update time',

    FOREIGN KEY (hospitalId) REFERENCES hospitals(id),
    FOREIGN KEY (createUser) REFERENCES user(id)
)
    comment 'medical registration';

create table if not exists order_registration (
    id                  bigint auto_increment comment 'id' primary key,
    hospitalId          bigint                not null comment 'hospital id',
    createUser          bigint                not null comment 'create user',
    registrationType    varchar(255)          not null comment 'type: internal medicine , surgery',
    doctorName          varchar(255)          not null comment 'doctor name',
    fee                 int(8)                not null comment 'registration fee',
    registrationStatus  int(4) default 0      not null comment 'registration status: 0, 1 ',
    registrationAt      datetime   default CURRENT_TIMESTAMP not null comment 'registration time ',
    createAt            datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt            datetime     default CURRENT_TIMESTAMP not null comment 'update time',
    paymentStatus       int(4) default 0      not null comment 'payment status: 0:false , 1:ture',
    
    FOREIGN KEY (hospitalId) REFERENCES hospitals(id),
    FOREIGN KEY (createUser) REFERENCES user(id)
)
    comment 'order medical registration';

create table if not exists rooms (
    id                      bigint auto_increment comment 'id' primary key,
    createUser              bigint                not null comment 'create user',
    hospitalId              bigint                not null comment 'hospital id',
    medicineType            varchar(255)          not null comment 'Type: internal medicine , surger',
    roomImgUrl              varchar(255)          not null comment 'room image url',
    fee                     int(10)               not null comment 'fee per day',
    floorNumber             int(8)                not null comment 'floor number',
    roomType                varchar(255)          not null comment 'room type: VIP - normal',
    roomNumber              int(8)                not null comment 'room number',
    bedNumber               int(8)                not null comment 'bed number',
    createAt           datetime     default CURRENT_TIMESTAMP not null comment 'reservation time',
    updateAt                datetime     default CURRENT_TIMESTAMP not null comment 'update time',

    FOREIGN KEY (hospitalId) REFERENCES hospitals(id),
    FOREIGN KEY (createUser) REFERENCES user(id)
)
    comment 'rooms';

create table if not exists order__room (
    id                      bigint auto_increment comment 'id' primary key,
    hospitalId              bigint                not null comment 'hospital id',
    createUser              bigint                not null comment 'create user',
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
    comment 'order room';

create table if not exists medicals (
    id                   bigint auto_increment comment 'id' primary key,
    createUser           bigint                not null comment 'create user',
    imgUrl               varchar(255)          not null comment 'medicine image url',
    medicineName         varchar(255)          not null comment 'medicine name ',
    medicinePrice        varchar(255)          not null comment 'medicine price ',
    countOfOrder         int(8)                not null comment 'count of order',
    medicineCount        int(8)                not null comment 'count of medicine',
    medicineType         varchar(255)          not null comment 'type: internal medicine , surgery',
    createAt             datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt             datetime     default CURRENT_TIMESTAMP not null comment 'update time',

    FOREIGN KEY (createUser) REFERENCES user(id)
)
    comment 'buy medical';

create table if not exists order_medical (
    id                   bigint auto_increment comment 'id' primary key,
    createUser           bigint                not null comment 'create user',
    imgUrl               varchar(255)          not null comment 'medicine image url',
    medicineName         varchar(255)          not null comment 'medicine name ',
    medicinePrice        varchar(255)          not null comment 'medicine price ',
    countOfOrder         int(8)                not null comment 'count of order',
    medicineType         varchar(255)          not null comment 'type: internal medicine , surgery',
    paymentStatus        int(4) default 0      not null comment 'payment status: 0:false , 1:ture',
    createAt             datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt             datetime     default CURRENT_TIMESTAMP not null comment 'update time',

    FOREIGN KEY (createUser) REFERENCES user(id)
)
    comment 'order buy medical';

create table if not exists phones (
    id                    bigint auto_increment comment 'id' primary key,
    createUser            bigint                not null comment 'create user',
    agencyName            varchar(255)          not null comment 'agency name',
    phoneNumber           varchar(255)          not null comment 'phone number',
    createAt              datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt              datetime     default CURRENT_TIMESTAMP not null comment 'update time',
    
    FOREIGN KEY (createUser) REFERENCES user(id)
)
    comment 'phones numbers';