## 為專案安裝套件及進行開發
        ·打開VScode，左下角點擊安裝套件
        ·點擊開發，即可開始製作各自頁面
        ·CTRL + C 結束開發

## 開發小提醒: 
        ·每次進行開發 都要按左下角 開發
         開啟監控及打包套件(不要使用watch sass，會有衝突問題)
        ·在dist資料夾開啟live server才是最終畫面
        ·沒有畫面很可能是style.scss的連接沒設好，或是打包時出現問題注意看終端機~
        ·如果可以盡量用sass法輸入，但要用css也沒差
        

## 專案資料夾架構
  | src  <<<   開發檔案及資源放在這裡面，在統一由gulp整合
    
        | html                   各自頁面資料夾 (可以把自己頁面的區塊拆開來)
                 |frontEnd       前台
                 |backEnd        後台
        | img                    放置圖片區
        | js                     JS彙整區
        | layout                 共用的html區

        | sass    style.scss     各自的scss，也務必記得從這裡匯入。
                 |base           基底環境scss   如 字形變數、Reset/normalize
                 |component
                 |layout         放共用的scss區 (會員彈窗、header、footer之區域)
                 |vendor         功能程式碼整合
                 |page           自己頁面的scss區
                        |frontend
                        |backend
                              
* 有些資料夾裡有放example.副檔名，是因為資料夾沒放檔案，會顯示不出來。

## 各自頁面html規範 (參考index.html)
* 自己的頁面要在外層加一層頁面的 div class
<div class="wrapper_index">   <!-- <class="wrapper"> 改成 <div class="wrapper_index">  -->
</div>


## git commit規範:
add: 負責頁面名稱.副檔名 ex. index.html, index.scss
edit: 負責頁面名稱,修改區塊,細部撰述
comment(註解):  遇到衝突的程式碼 註解，並通知大家。
delete: 負責頁面名稱



## git步驟:

打開sourcetree，上方選擇tfd105_g3

左側branch選dev > pull確認是否有最新檔 > 左側點選自己的branch並merge已pull的dev最新階段 > 打開vs code確認是自己的分支，進行開發
開發階段性完成任務後 > 在自己的branch把剛剛更改的檔案stage all(或階段性選取自己要merge to dev的檔案) 在下方輸入commit內容，點選commit > 左側branch選擇dev > 在dev merge剛剛自己分支commit的最新檔案 > 在dev點選push*

* 如果有衝突要先解，解完後”git commit > push” (at dev) 通常是同一隻檔案做新刪修才會發生。



