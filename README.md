# flowComment_SteamlabOBS

A set of javaScript and CSS for Streamlab OBS.<br/>
The comments in livechat will be animated and can be styled by viewer to a certain extent.<br/>
Streamlab OBSで使えるjavaScriptとCSSのセットです。<br/>
Livechatのコメントをある程度視聴者が自由にスタイル付けながら流させます。<br/><br/>

Known issue<br/>
- Custom Emoji currently not supported by Streamlab OBS　(https://ideas.streamlabs.com/ideas/SL-I-4572)<br/>


既存バグ<br/>
- カスタム絵文字が表示できない (https://ideas.streamlabs.com/ideas/SL-I-4572)<br/><br/>

Special thanks to セフィラ・スゥ(<a href="https://twitter.com/SephiraSu">@SephiraSu</a>) for the innovation.<br/>
このプロジェクトの発想はセフィラ・スゥ(<a href="https://twitter.com/SephiraSu">@SephiraSu</a>)から頂いたものです。彼女に感謝を。<br/><br/>



# How To Use --使え方--
--Streamer Side--<br/>
Create a "Chat Box" widget in streamlab OBS and put the CSS/JS in corresponding field.<br/>
--放送者側--<br/>
チャットボックスウィジェットを追加して、JS/CSSをそれぞれの場所に貼ってください<br/>
--Viewer Side--<br/>
The input in LiveChat<br/>
--視聴者側--<br/>
LiveChatでの入力<br/><br/>

Coloring : [#c=colorCode]<br/>
e.g. [#c=red] will show the comment in red. Color code is accepted also.<br/>
[#c=rand] will pick a color by random.<br/>
色 : [#c=colorCode]<br/>
e.g. [#c=red]なら赤い文字。カラーコードもおｋ<br/>
[#c=rand]でランダムの色<br/><br/>

Direction : [#d=H or R](Hold Reverse)<br/>
e.g. [#d=H] will place the comment on the middie statically 、[#d=R] will reverse the animating direction<br/>
方向 : [#d=H or R](Hold Reverse)<br/>
e.g. [#d=H]は、文字を中央に置く、[#d=R]は、逆方向（左から右）<br/><br/>

Font size : [#s=fontSize]<br/>
e.g. [#s=98] will resize the comment to 98px<br/>
文字サイズ : [#s=fontSize]<br/>
e.g. [#s=98]ならfontSize 98pxの文字<br/><br/>

All command are optional and order does not matter.<br/>
上記の選択は混在可、順不同可<br/><br/>

e.g.<br/>
[#c=red][#d=H]Test<br/>
[#c=red][#s=98]Test<br/>
[#c=#ff0000][#s=72]Test<br/><br/>









