
  const  vowels = [
        {heading :"தமிழ் மொழியின் உயிரெழுத்துகள்"},
        {description :"தமிழில் 12 உயிரெழுத்துகள் உள்ளன: அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ. இவை குறில், நெடில் எனப் பிரிக்கப்படுகின்றன. உயிரெழுத்துகள் மொழியின் அடிப்படை அமைப்பாகும்."},
        { letter: "அ", pronunciation: "a", url: "https://i.pinimg.com/736x/98/14/71/981471e445eb745541f0ad792f107031.jpg" }, // அலகு
        { letter: "ஆ", pronunciation: "aa", url: "https://i.pinimg.com/736x/ab/fe/8a/abfe8a4136323b59f32a33e3f615f5d5.jpg" }, // ஆண்டி
        { letter: "இ", pronunciation: "i", url: "https://i.pinimg.com/736x/cd/b7/8b/cdb78bdc7a12dac55f62e3c90f47d841.jpg" }, // இலக்கு
        { letter: "ஈ", pronunciation: "ii", url: "https://i.pinimg.com/736x/3d/19/49/3d1949da2a42301b348961591b1873e4.jpg" }, // ஈரங்கு
        { letter: "உ", pronunciation: "u", url: "https://i.pinimg.com/736x/70/47/61/7047615fc4a8a3ea5cb766bc34a25246.jpg" }, // உள்ளுக்கு
        { letter: "ஊ", pronunciation: "uu", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-uu.gif?w=424" }, // ஊர்
        { letter: "எ", pronunciation: "e", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-e.gif?w=424" }, // எல்
        { letter: "ஏ", pronunciation: "ee", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-ee.gif?w=424" }, // ஏறு
        { letter: "ஐ", pronunciation: "ai", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-ai.gif?w=424" }, // ஐவு
        { letter: "ஒ", pronunciation: "o", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-o.gif?w=424" }, // ஒள்
        { letter: "ஓ", pronunciation: "oo", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-oo.gif?w=424" }, // ஓறு
        { letter: "ஔ", pronunciation: "au", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-au.gif?w=424" } // ஔய
    ]

   const  consonants = [
    {heading :"தமிழ் மொழியின் மெய்யெழுத்துகள்"},
    {description :"தமிழில் 18 மெய்யெழுத்துகள் உள்ளன: க், ங், ச், ஞ், ட், ண், த், ந், ப், ம், ய், ர், ல், வ், ழ், ள், ற், ன்.மெய்யெழுத்துகள் தனித்து எந்த ஒரு முழுமையான ஒலியையும் உருவாக்காது; அவை உயிரெழுத்துகளுடன் சேர்ந்து உயிர்மெய் எழுத்துகளை உருவாக்குகின்றன. தமிழில் மெய்யெழுத்துகள் பேச்சில் தனித்தனியாக பயன்படுத்தப்படுவதில்லை, ஆனால் எழுத்தாக்கத்தில் மிக முக்கியமான இடம் பெறுகின்றன."},

        { letter: "க", pronunciation: "ka", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-k.gif?w=424" }, // கால்
        { letter: "ங", pronunciation: "nga", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-n.gif?w=424" }, // ங்கா
        { letter: "ச", pronunciation: "cha", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-c.gif?w=424" }, // சில
        { letter: "ஞ", pronunciation: "nya", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-nn.gif?w=424" }, // ஞேல்
        { letter: "ட", pronunciation: "ta", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-t.gif?w=424" }, // டாட்
        { letter: "ண", pronunciation: "na", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-nnn.gif?w=424" }, // ண்டு
        { letter: "த", pronunciation: "tha", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-th.gif?w=424" }, // தெர்
        { letter: "ந", pronunciation: "na", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-n2.gif?w=424" }, // நிலம்
        { letter: "ப", pronunciation: "pa", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-p.gif?w=424" }, // பார்
        { letter: "ம", pronunciation: "ma", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-m.gif?w=424"}, // மல்கு
        { letter: "ய", pronunciation: "ya", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-y.gif?w=424" }, // யாமை
        { letter: "ர", pronunciation: "ra", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-r.gif?w=424" }, // ராம்
        { letter: "ல", pronunciation: "la", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-l.gif?w=424" }, // லேட்
        { letter: "வ", pronunciation: "va", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-v.gif?w=424" }, // விழ்
        { letter: "ழ", pronunciation: "zha", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-rr.gif?w=424" }, // ழிசை
        { letter: "ள", pronunciation: "la", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-ll.gif?w=424" }, // ளிசை
        { letter: "ற", pronunciation: "ra", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-r3.gif?w=424" }, // ற்று
        { letter: "ன", pronunciation: "na", url: "https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-nn2.gif?w=424" } // ன்னா
    ]
   const letters= [
    {heading :"தமிழ் மொழியின் எண்கள்"},
    {description :"தமிழில் தனித்துவமான எண்கள் கணக்கீட்டிற்குப் பயன்படுத்தப்பட்டு வந்தன. தமிழ் எண்கள் 0 முதல் 9 வரை அடிப்படை எண்களாகவும், மேலும் 10, 100, 1000 போன்ற பெரிய எண்களுக்கும் தனியான குறியீடுகளும் உள்ளன.௦ (பூஜ்ஜியம்), ௧ (ஒன்று), ௨ (இரண்டு), ௩ (மூன்று), ௪ (நான்கு), ௫ (ஐந்து), ௬ (ஆறு), ௭ (ஏழு), ௮ (எட்டு), ௯ (ஒன்பது)"},

        { letter: "0", url: "௰" }, // ௦
        { letter: "1", url: "௱" }, // ௧
        { letter: "2", url: "௲" }, // ௨
        { letter: "3", url: "௳" }, // ௩
        { letter: "4", url: "௴" }, // ௪
        { letter: "5", url: "௵" }, // ௫
        { letter: "6", url: "௶" }, // ௬
        { letter: "7", url: "௷" }, // ௭
        { letter: "8", url: "௸" }, // ௮
        { letter: "9", url: "௹" } // ௯
    ]
    const commonletters = [
        {heading :"தமிழ் மொழியின் பொதுவான வார்த்தைகள்"},
        {description :"தமிழில் தினசரி வாழ்வில் அதிகம் பயன்படுத்தும் சில பொதுவான வார்த்தைகள் உள்ளன. இவை வணக்கம் கூறுதல், நன்றி தெரிவிப்பு, மற்றும் அடிப்படை தொடர்புகளுக்கு உதவுகின்றன."},

        { letter: "நம்", url: "Name" }, // நம்
        { letter: "மனிதர்", url: "Human" }, // மனிதர்
        { letter: "இல்வ", url: "Life" }, // இல்வ
        { letter: "நிறை", url: "Knowledge" }, // நிறை
        { letter: "கார்", url: "Love" }, // கார்
        { letter: "நன்றி", url: "Thank You" }, // நன்றி
        { letter: "வணக்கம்", url: "Hello" }, // வணக்கம்
        { letter: "அன்பு", url: "Love" }, // அன்பு
        { letter: "குடும்பம்", url: "Family" }, // குடும்பம்
        { letter: "நட்பு", url: "Friendship" }, // நட்பு
        { letter: "சமாதானம்", url: "Peace" }, // சமாதானம்
        { letter: "உழைப்பு", url: "Hard Work" }, // உழைப்பு
        { letter: "நம்பிக்கை", url: "Trust" }, // நம்பிக்கை
        { letter: "வெற்றி", url: "Success" }, // வெற்றி
        { letter: "அறிவு", url: "Wisdom" }, // அறிவு
        { letter: "மனிதன்", url: "Man" }, // மனிதன்
        { letter: "பெண்", url: "Woman" }, // பெண்
        { letter: "சிறந்தது", url: "Best" }, // சிறந்தது
        { letter: "கணவர்", url: "Husband" }, // கணவர்
        { letter: "மனைவி", url: "Wife" }, // மனைவி
        { letter: "குழந்தை", url: "Child" }, // குழந்தை
        { letter: "காதல்", url: "Romance" }, // காதல்
        { letter: "புத்தகம்", url: "Book" }, // புத்தகம்
        { letter: "அரசு", url: "Government" }, // அரசு
        { letter: "இன்பம்", url: "Happiness" }, // இன்பம்
        { letter: "துன்பம்", url: "Sorrow" }, // துன்பம்
        { letter: "சிந்தனை", url: "Thought" }, // சிந்தனை
        { letter: "மழை", url: "Rain" }, // மழை
        { letter: "நிலம்", url: "Land" }, // நிலம்
        { letter: "கதிரவன்", url: "Sun" }, // கதிரவன்
        { letter: "நதி", url: "River" }, // நதி
        { letter: "மலை", url: "Mountain" }, // மலை
        { letter: "பயணம்", url: "Journey" }, // பயணம்
        { letter: "சமூகம்", url: "Society" }, // சமூகம்
        { letter: "கல்வி", url: "Education" }, // கல்வி
        { letter: "வேலை", url: "Work" }, // வேலை
        { letter: "சமையல்", url: "Cooking" }, // சமையல்
        { letter: "வாழ்க்கை", url: "Life" }, // வாழ்க்கை
        { letter: "ஆரோக்கியம்", url: "Health" } // ஆரோக்கியம்
    ];
    

const tamilContent = [vowels , 0 , consonants , 1 , letters , 2, commonletters , 3];

export default  function TamilContent(){
    return tamilContent;
} 