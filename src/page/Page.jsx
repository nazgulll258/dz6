import { useSelector } from "react-redux"
import { selectTheme } from "../store/ThemeSlice"
import '../App.css'

const Page = () => {
  const  selector = useSelector(selectTheme)

    const  photos = 'https://static.wikia.nocookie.net/onepiece/images/4/42/Roronoa_Zoro_Manga_Post_Timeskip_Infobox.png/revision/latest?cb=20140619183920&path-prefix=ru'
  return (
    <div className={selector ? 'dark':'light'}>
        <div>
                 <h1>Ророноа Зоро</h1>
      <h2>— пират, бывший охотник за головами и один из <br /> главных протагонистов One Piece. <br />

Ророноа Зоро был первым, кто присоединился к Пиратам Соломенной 
<br /> Шляпы и является одним из четырёх сильнейших членов команды, а его
 <br /> мечта — стать величайшим мечником в мире. Из за его огромной силы и
  <br /> сдержанности, разительно отличающейся от легкомысленного 
  <br />поведения Луффи, многие зачастую принимали его за капитана
   <br /> команды или за первого помощника.Также, он один из пиратов,
    <br /> которых назвали «Худшее Поколение».BeliSymbol320 000 000. После событий <br />
     в стране Вано награда Зоро увеличилась до BeliSymbol1,111,000,000.
        </h2>  
        </div>

        <img src={photos}
        alt="photo" />
    </div>
  )
}

export default Page
