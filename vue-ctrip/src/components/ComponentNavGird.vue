<template>
    <div class="nav-gird">
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/hotel.fc17d0f7726132bf2459621923704f0f.png" alt="img">
            </span>
            <span>酒店</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/flight.2af1e1835a10709db9ad91702e30de35.png" alt="img">
            </span>
            <span>机票</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/train_ticket.62fc76e6f4ffac3d2e4610c807f535bb.png" alt="img">
            </span>
            <span>火车票</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/vacation.50ea6db60ea69086791ea507b62364bb.png" alt="img">
            </span>
            <span>旅游</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/gs.24c525633ba91ad0a2c41ff96773262b.png" alt="img">
            </span>
            <span>攻略/景点</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/hotel_inn.cbccfdc8449dea7bf83171dfa7ea6f81.png" alt="img">
            </span>
            <span>民宿/客栈</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/flight_package.7485a98b650ea13917e3cdd36f3eda67.png" alt="img">
            </span>
            <span>机+酒</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/bus_ticket.19d2e8eb864288544912b3c1005c9a8e.png" alt="img">
            </span>
            <span>汽车/船票</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/ticket.e872065047ec929016de33d36e578e49.png" alt="img">
            </span>
            <span>门票/活动</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/shop.dba5be1f7b683690ea1d53bdd9ecef8f.png" alt="img">
            </span>
            <span>购物/免税</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/food_v2.759e14ab287956e9925f669ec1ef2169.png" alt="img">
            </span>
            <span>美食</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/airport_transfer.fb8d923aefb7393a3485ebcde0888932.png" alt="img">
            </span>
            <span>接送机</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/car.d343444e248183e0c2ce61894012a327.png" alt="img">
            </span>
            <span>租车</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/weekend.b327d041f73dd403971831a874eb25e9.png" alt="img">
            </span>
            <span>周边游</span>
        </li>
        <li class="nav-gird-li">
            <span>
                <img src="https://ws-s.tripcdn.cn/modules/basebiz/h5home/finance.5cd5a7a955c6e5c633e6ae4e2b6cd551.png" alt="img">
            </span>
            <span>分期</span>
        </li>
    </div>
</template>

<style scoped>
.nav-gird {
    display: flex;
    flex-wrap: wrap;
    border-radius: 6px;
    /* border: 1px solid #999; */
    margin-top: 10px;
    overflow: hidden;
}
.nav-gird-li {
    flex: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 58px;
}
.nav-gird-li span img {
    margin-top: 6px;
    width: 28px;
    height: 28px;
}

span {
    color: #ffffff;
    font-size: 12px;
    line-height: 15px;
}

.nav-gird-li:nth-child(1) {
    background-image: -webkit-linear-gradient(#FA5C55, #FB8051);
    border-right: 1px solid #fff;
}
.nav-gird-li:nth-child(2) {
    background-image: linear-gradient(#3C84FA, #4FB0FA);
    border-right: 1px solid #fff;
}
.nav-gird-li:nth-child(3) {
    background-image: linear-gradient(#5E80FF, #65A3FF);
    border-right: 1px solid #fff;
}
.nav-gird-li:nth-child(4) {
    background-image: linear-gradient(#30C4B6, #50D8B3);
    border-right: 1px solid #fff;
}
.nav-gird-li:nth-child(5) {
    background-image: linear-gradient(#FF8B3A, #FFA445);
}
/* 粉色 */
.nav-gird-li:nth-child(6) {
    background-color: #FFF5F2;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.nav-gird-li:nth-child(11) {
    background-color: #FFF5F2;
    border-right: 1px solid #fff;
}
/* 青色 */
.nav-gird-li:nth-child(7) {
    background-color: #EFF9FF;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.nav-gird-li:nth-child(12) {
    background-color: #EFF9FF;
    border-right: 1px solid #fff;
}
/* 淡紫色 */
.nav-gird-li:nth-child(8) {
    background-color: #F3F5FF;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.nav-gird-li:nth-child(13) {
    background-color: #F3F5FF;
    border-right: 1px solid #fff;
}
/* 偏绿色 */
.nav-gird-li:nth-child(9) {
    background-color: #ECFDF8;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.nav-gird-li:nth-child(14) {
    background-color: #ECFDF8;
    border-right: 1px solid #fff;
}
/* 偏橘色 */
.nav-gird-li:nth-child(10) {
    background-color: #FFF9F2;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.nav-gird-li:nth-child(15) {
    background-color: #FFF9F2;
    border-right: 1px solid #fff;
}

/* css选择器大于第6个的情况，以下相当于 6-15 */
.nav-gird-li:nth-child(5) ~ li span {
    color: #333333;
}


</style>