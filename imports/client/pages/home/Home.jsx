import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <main className="cc-main">
                <section className="cc-top-section">
                    <article className="cc-top-article">
                        <div className="cc-top-article-title">Best donut in the city!</div>
                        <div className="cc-top-article-content">Dispatched entreaties boisterous say why stimulated.
                            Certain forbade picture now prevent carried she get see sitting.
                            Up twenty limits as months. Inhabit so perhaps of in to certain.</div>
                    </article>

                    <section className="cc-logo"><img src="/assets/img/donuts.jpg"/></section>
                </section>

                <section className="cc-bottom-section">
                    <article className="cc-article">
                        <div className="cc-article-title">Article1 title asdas das d asdasdasdas dasd asdasd</div>
                        <div className="cc-article-content">Article1 content asdasdasd sadasfksndlgns sdnsdg sdjg  s sdgsdg dsgjgsdg</div>
                    </article>
                    <article className="cc-article">
                        <div className="cc-article-title">Article2 title asdas das d asdasdasdas dasd asdasd</div>
                        <div className="cc-article-content">Article2 content asdasdasd sadasfksndlgns sdnsdg sdjg  s sdgsdg dsgjgsdg</div>
                    </article>
                    <article className="cc-article">
                        <div className="cc-article-title">Article3 title asdas das d asdasdasdas dasd asdasd</div>
                        <div className="cc-article-content">Article3 content asdasdasd sadasfksndlgns sdnsdg sdjg  s sdgsdg dsgjgsdg</div>
                    </article>
                </section>
            </main>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
