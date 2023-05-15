import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về BookingCare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/7tiR7SI4CkI"
                            title="BookingCare trên VTV1 ngày 21/02/2018 - Chương trình Cà phê khởi nghiệp"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="content-right">
                        Chào mừng đến với trang web đặt lịch khám online của
                        chúng tôi! Chúng tôi cung cấp dịch vụ đặt lịch khám trực
                        tuyến nhanh chóng, tiện lợi và dễ dàng. Với trải nghiệm
                        đặt lịch khám trực tuyến của chúng tôi, bạn có thể đặt
                        lịch khám bất kỳ lúc nào, bất kỳ nơi đâu, từ thiết bị di
                        động hoặc máy tính để bàn. Không cần phải xếp hàng đợi
                        chờ, bạn có thể lựa chọn bác sĩ và thời gian khám một
                        cách nhanh chóng và dễ dàng chỉ trong vài cú nhấp chuột.
                        Đồng thời, bạn cũng có thể xem thông tin bác sĩ, phòng
                        khám, các dịch vụ khám bệnh và chi phí trước khi đặt
                        lịch khám. Hãy để chúng tôi giúp bạn tiết kiệm thời gian
                        và nâng cao chất lượng cuộc sống bằng cách sử dụng dịch
                        vụ đặt lịch khám trực tuyến của chúng tôi ngay hôm nay!
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
