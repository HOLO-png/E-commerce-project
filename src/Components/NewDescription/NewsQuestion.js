import React from 'react'

function NewsQuestion() {
    return (
        <div className="NewsQuestion">
            <p className="NewsQuestion__text">
                Hỏi & Đáp
                <span className="NewsQuestion__text-small">7</span>
            </p>
            <div className="NewsQuestion-comment">
            <textarea className="NewsQuestion-comment__textarea"
                placeholder="Viết bình luận của bạn (Vui lòng gõ tiếng việt có dấu)">
            </textarea>
            <button className="NewsQuestion-comment__textarea-btn">Gửi câu hỏi</button>
            </div>
            <div className="NewsQuestion__userComment">
                <div className="NewsQuestion__userComment-shortName">LHX</div>
                <div className="NewsQuestion__userComment-info">
                    <p className="NewsQuestion__userComment-info-name">Lương xuân liêu <span>vào ngày 1/9/2020</span></p>
                    <p className="NewsQuestion__userComment-info-content">Còn tai thỏ thì k nên đổi làm gì k có gì cải tiến mấy</p>
                    <button className="NewsQuestion__userComment-info-reply">Trả lời</button>
                </div>
            </div>
            <div className="NewsQuestion__userComment">
                <div className="NewsQuestion__userComment-shortName">T</div>
                <div className="NewsQuestion__userComment-info">
                    <p className="NewsQuestion__userComment-info-name">Tâm <span>vào ngày 31/8/2020</span></p>
                    <p className="NewsQuestion__userComment-info-content">Đẹp quá</p>
                    <button className="NewsQuestion__userComment-info-reply">Trả lời</button>
                </div>
            </div>
            <div className="NewsQuestion__userComment">
                <div className="NewsQuestion__userComment-shortName">L</div>
                <div className="NewsQuestion__userComment-info">
                    <p className="NewsQuestion__userComment-info-name">Linh <span>vào ngày 31/8/2020</span></p>
                    <p className="NewsQuestion__userComment-info-content">Hóng thiết kế mới hơn chứ cái viền chưa ăn thua</p>
                    <button className="NewsQuestion__userComment-info-reply">Trả lời</button>
                </div>
            </div>
            <div className="NewsQuestion__userComment">
                <div className="NewsQuestion__userComment-shortName">DCT</div>
                <div className="NewsQuestion__userComment-info">
                    <p className="NewsQuestion__userComment-info-name">Đức Tiến <span>vào ngày 1/9/2020</span></p>
                    <p className="NewsQuestion__userComment-info-content">Hy vọng 2 năm nữa bỏ đợc tai thỏ để mình lên đời.</p>
                    <button className="NewsQuestion__userComment-info-reply">Trả lời</button>
                </div>
            </div>
            <div className="NewsQuestion__userComment">
                <div className="NewsQuestion__userComment-shortName">TL</div>
                <div className="NewsQuestion__userComment-info">
                    <p className="NewsQuestion__userComment-info-name">Thái <span>vào ngày 31/7/2020</span></p>
                    <p className="NewsQuestion__userComment-info-content">Còn tai thỏ là thấy ngán rồi</p>
                    <button className="NewsQuestion__userComment-info-reply">Trả lời</button>
                </div>
            </div>
            <div className="NewsQuestion__userComment">
                <div className="NewsQuestion__userComment-shortName">NC</div>
                <div className="NewsQuestion__userComment-info">
                    <p className="NewsQuestion__userComment-info-name">Ngọc <span>vào ngày 25/4/2020</span></p>
                    <p className="NewsQuestion__userComment-info-content">Chờ xem. Giá.</p>
                    <button className="NewsQuestion__userComment-info-reply">Trả lời</button>
                </div>
            </div>
            <div className="NewsQuestion__userComment">
                <div className="NewsQuestion__userComment-shortName">NNT</div>
                <div className="NewsQuestion__userComment-info">
                    <p className="NewsQuestion__userComment-info-name">Nguyễn Tấn Tài <span>vào ngày 27/7/2020</span></p>
                    <p className="NewsQuestion__userComment-info-content">Xác nhận là màn hình vẫn tai thỏ to như cũ</p>
                    <button className="NewsQuestion__userComment-info-reply">Trả lời</button>
                </div>
            </div>
        </div>
    )
}

export default NewsQuestion
