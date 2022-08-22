import ArticleComponent from '../components/ArticleComponent'
import ContentOneComponent from '../components/ContentOneComponent'
import KnowComponent from '../components/KnowledgeComponent'
import NewsComponent from '../components/NewsComponent'
import SlideCom from '../components/SlideComponent'
import MainLayout from '../shared/MainLayout'

function Home(){
    return(
        <>
            <MainLayout>
                <SlideCom />
                <ContentOneComponent />
                <NewsComponent />
                <ArticleComponent />
                <KnowComponent />
            </MainLayout>
        </>
    )
}
export default Home