(function(root){'use strict';const data={
  "title": "記録と足跡",
  "subtitle": "銀の聖杯と、止まった水車。",
  "cases": {
    "village": {
      "id": "village",
      "number": "01",
      "era": "収穫祭を前にした村",
      "title": "借りものの後ろ姿と、止まった水車",
      "accent": "rust",
      "scene": "assets/village.svg",
      "interactionVersion": 4,
      "intro": "祭りの朝、水車が止まり、小さな教会から銀の聖杯が消えた。町で書記を手伝うあなたは、里帰りした村で二つの出来事を調べる。",
      "premise": "水車の粉挽きが止まり、祭りの支度が滞っている。その騒ぎのあと、教会の聖杯が見当たらないと分かった。五人は、祭りに使う荷や仕事場をあなたが点検することに同意した。気になるものを自分で調べ、言葉と現物を確かめよう。",
      "objective": "場所を選び、気になったものを調べる。手元の資料を比べたり、相手に示して質問したりできる。どちらの出来事から取りかかってもよい。",
      "opening": [
        {
          "id": "arrival",
          "speaker": "あなた",
          "text": "町の書記の手伝いを始めて、初めての里帰りだ。祭りの飾りも、鐘の音も、子どものころと変わらない。テオは工房にいるだろうか。"
        },
        {
          "id": "church",
          "speaker": "オルン",
          "text": "ちょうどよいところへ帰ってきた。水車が止まったと思ったら、今度は教会の銀の杯がない。祭りの二つ鐘にはあったはずなのだが……。"
        },
        {
          "id": "friend",
          "speaker": "テオ",
          "text": "また俺の借金の話か。あれは片づいたよ。それにセラなら、朝の一つ鐘から二つ鐘まで、ここで俺と飾りを結んでいた。"
        },
        {
          "id": "caretaker",
          "speaker": "オルン",
          "text": "町で帳面を扱っているのだろう？　テオの札も気になるし、粉挽きのネリも困っている。仕事場と祭りの荷は皆で調べてよいと話してある。お前も力を貸してくれ。"
        }
      ],
      "suspects": [
        {
          "id": "mira",
          "name": "ミラ",
          "role": "パン焼き職人",
          "short": "窯場",
          "description": "テオと親しい。祭りの白花を教会へ届けたという。"
        },
        {
          "id": "theo",
          "name": "テオ",
          "role": "木工職人",
          "short": "工房",
          "description": "あなたの幼なじみ。仕事が減り、工房の借金を抱えていると噂される。"
        },
        {
          "id": "sera",
          "name": "セラ",
          "role": "染物職人",
          "short": "染場",
          "description": "灰色の外套と、浅い木の花盆を持っている。"
        },
        {
          "id": "orn",
          "name": "オルン",
          "role": "教会の世話役",
          "short": "教会",
          "description": "祭りの準備と教会の戸締まりを任されている。"
        },
        {
          "id": "neri",
          "name": "ネリ",
          "role": "粉挽き職人",
          "short": "水車小屋",
          "description": "祭り用の粉を挽いている。止まった水車と、待たせている荷車を気にしている。"
        }
      ],
      "locations": [
        {
          "id": "workshop",
          "name": "テオの工房",
          "description": "作業机、窓、木材棚。テオは作りかけの飾りを置いている。",
          "evidenceIds": [
            "theo_first",
            "loan_front",
            "loan_back",
            "window_view",
            "workshop_offcut"
          ],
          "requiresFlags": [],
          "pos": [
            64.972,
            46.214
          ]
        },
        {
          "id": "church",
          "name": "小さな教会",
          "description": "厚い白布を掛けた祭壇。壁際には帳面が置かれている。",
          "evidenceIds": [
            "orn_first",
            "cloth_frame",
            "altar_chip",
            "cloth_outline",
            "inventory_front",
            "inventory_reverse",
            "side_latch"
          ],
          "requiresFlags": [],
          "pos": [
            38.153,
            46.894
          ]
        },
        {
          "id": "bakery",
          "name": "ミラの窯場",
          "description": "焼き台の脇で、祭りに運ぶ荷がまとめられている。",
          "evidenceIds": [
            "mira_first",
            "mira_packing",
            "mira_relationship",
            "mira_motive",
            "chest_layers",
            "wrapped_item",
            "found_cup"
          ],
          "requiresFlags": [],
          "pos": [
            25.55,
            58.673
          ]
        },
        {
          "id": "dye-yard",
          "name": "セラの染場",
          "description": "水桶と染め束。木の盆や外套が干し台のそばにある。",
          "evidenceIds": [
            "sera_first",
            "tray_custody",
            "tray_surface",
            "tray_chip",
            "knot_sample"
          ],
          "requiresFlags": [],
          "pos": [
            20.913,
            45.585
          ]
        },
        {
          "id": "bell-tower",
          "name": "鐘楼",
          "description": "鐘楼の下に、祭りの合図の貼り紙がある。",
          "evidenceIds": [
            "signals"
          ],
          "requiresFlags": [],
          "pos": [
            39.162,
            29.985
          ]
        },
        {
          "id": "square",
          "name": "井戸の広場",
          "description": "祭りの荷車が休む広場。村へ帰ってきた道が続いている。",
          "evidenceIds": [],
          "requiresFlags": [],
          "pos": [
            55.545,
            63.018
          ]
        },
        {
          "id": "church-storage",
          "name": "教会の脇室",
          "description": "横戸の内側。小さな棚と蝋燭がある。",
          "evidenceIds": [
            "memorial_note"
          ],
          "requiresFlags": [],
          "pos": [
            44.001,
            35.22
          ]
        },
        {
          "id": "watermill",
          "name": "水車小屋",
          "description": "粉挽きの小屋。水車の近くでネリが荷車を待たせている。",
          "evidenceIds": [
            "neri_first",
            "neri_visit",
            "repair_work"
          ],
          "requiresFlags": [],
          "pos": [
            19.098,
            84.063
          ]
        },
        {
          "id": "sluice",
          "name": "水路の取水口",
          "description": "本流から小さな水路が分かれる。板の覆いと操作柄が見える。",
          "evidenceIds": [
            "water_flow",
            "sluice_block",
            "removed_stop",
            "mill_restored"
          ],
          "requiresFlags": [],
          "pos": [
            12.645,
            72.179
          ]
        }
      ],
      "incidents": [
        {
          "id": "chalice",
          "title": "教会の聖杯"
        },
        {
          "id": "mill",
          "title": "止まった水車"
        }
      ],
      "topics": [
        {
          "id": "morning",
          "label": "今朝の説明を確かめる"
        },
        {
          "id": "chalice",
          "label": "聖杯について尋ねる"
        },
        {
          "id": "mill",
          "label": "水車について尋ねる"
        },
        {
          "id": "personal",
          "label": "人目を避けて話す"
        }
      ],
      "evidence": [
        {
          "id": "theo_first",
          "title": "テオの今朝の説明",
          "kind": "調査記録",
          "body": [
            "テオ：「借金は片づいた。この札に『受領』ってあるだろう」",
            "「朝の一つ鐘から二つ鐘までは工房だ。セラもずっと一緒に飾りを結んでいた。教会には行っていないはずさ」"
          ]
        },
        {
          "id": "loan_front",
          "title": "借用札の表",
          "kind": "調査記録",
          "body": [
            "木の札の表に「貸付 銀貨五枚／受領 木工職人テオ／返す日 収穫祭」とある。五本の刻みが並ぶ。"
          ]
        },
        {
          "id": "loan_back",
          "title": "借用札の裏と控え",
          "kind": "調査記録",
          "body": [
            "裏の書式：「受領は借り手が元金を受けた印。返済時は貸し手が刻みを横線で消す」",
            "札の五本の刻みに横線はない。控えの追記は「残り五枚、祭りの日まで」。"
          ]
        },
        {
          "id": "loan_reading",
          "title": "札の二つの面",
          "kind": "調査記録",
          "body": [
            "「受領」の名は借り手テオ。返済を示す横線はなく、控えにも残り五枚と記されている。"
          ]
        },
        {
          "id": "theo_debt",
          "title": "テオの借金の話",
          "kind": "調査記録",
          "body": [
            "テオ：「まだ五枚残ってる。お前に心配されたくなくて、ごまかした」",
            "「ミラには昨日話した。でも、あいつに金策を頼んだり、何かを売れと相談したりはしていない」"
          ],
          "supersedes": "theo_first"
        },
        {
          "id": "theo_sighting",
          "title": "窓から見た後ろ姿",
          "kind": "調査記録",
          "body": [
            "テオ：「セラとずっと一緒、は嘘だ。花車の『出るぞ』という声のころ、灰色の外套で浅い盆を持つ人が教会の横戸へ入るのを見た。顔は見えなかった」",
            "「セラの物だったから本人だと思った。疑われたくないだろうと、ここにいたことにした。……あいつを守るつもりだった」"
          ],
          "supersedes": "theo_first"
        },
        {
          "id": "window_view",
          "title": "工房の西窓",
          "kind": "調査記録",
          "body": [
            "西窓から教会の横戸が見える。横戸へ入る人は窓に背を向ける。頭巾を被ると、顔よりも背中と手に持つ盆が見える位置だ。"
          ]
        },
        {
          "id": "theo_identity",
          "title": "テオが訂正した人物の名",
          "kind": "調査記録",
          "body": [
            "テオ：「外套と盆を見ただけだった。ミラが借りていたなら、セラと決めたのは俺だ。顔を確かめてはいない」"
          ],
          "supersedes": "theo_sighting"
        },
        {
          "id": "orn_first",
          "title": "オルンの最後の確認",
          "kind": "調査記録",
          "body": [
            "オルン：「二つ鐘のとき、正面の敷居からいつもの白布の形を見た。杯はあったはずだ」",
            "「水車から呼ばれて、一度は教会を離れた。戻ってもいつもの形だったのだ」"
          ]
        },
        {
          "id": "cloth_frame",
          "title": "白布の下",
          "kind": "調査記録",
          "body": [
            "白布を上げると、固定された小さな木枠が現れた。その内側の丸いくぼみは空だ。厚い白布を支えるのは木枠だった。"
          ],
          "image": "assets/altar-uncovered.png",
          "imageAlt": "白布を上げた祭壇。木枠と空のくぼみが見える"
        },
        {
          "id": "cloth_outline",
          "title": "布を戻した祭壇",
          "kind": "調査記録",
          "body": [
            "空のくぼみを見たあとで白布を戻し、正面の敷居へ下がった。白布の外形は、上げる前と変わらない。布越しに中の銀色は見えない。"
          ],
          "image": "assets/altar-covered.png",
          "imageAlt": "杯のない祭壇に白布を戻した外形"
        },
        {
          "id": "orn_revision",
          "title": "世話役の言い直し",
          "kind": "調査記録",
          "body": [
            "オルン：「二つ鐘に布を上げてはいない。最後に実物を見たのは、一つ鐘の前にくぼみを拭いたときだ。青い縁は欠けていなかった」",
            "「水車から『取水口を見てくれ』と呼ばれたので、そちらへ行った。湿気を逃がすため横戸を開けていたのに、留め金を戻さなかった」"
          ],
          "supersedes": "orn_first"
        },
        {
          "id": "side_latch",
          "title": "横戸の留め金",
          "kind": "調査記録",
          "body": [
            "横戸は外から押して開いた。内側の留め金は受けから外れている。木部や金具にこじ開けた傷はない。"
          ]
        },
        {
          "id": "altar_chip",
          "title": "祭壇の青い薄片",
          "kind": "調査記録",
          "body": [
            "丸いくぼみの奥に、青い七宝の薄片が一つある。縁は二か所で不規則に折れ、表面を細い白い筋が横切っている。"
          ]
        },
        {
          "id": "inventory_front",
          "title": "祭礼具の台帳",
          "kind": "調査記録",
          "body": [
            "台帳に銀の聖杯の図がある。足の周りには青い七宝があり、一か所に白い焼きむらの筋が描かれている。"
          ]
        },
        {
          "id": "inventory_reverse",
          "title": "台帳の折り込み",
          "kind": "調査記録",
          "body": [
            "折り込みには聖杯の底の実寸写しと、「寄進 ロエン家／三つ葉、右の葉に切れ目」の刻印の写しがある。足の輪郭には小さな平らな部分が一か所ある。"
          ]
        },
        {
          "id": "mira_first",
          "title": "ミラの花配り",
          "kind": "調査記録",
          "body": [
            "ミラ：「セラに灰色の外套と花盆を借りたわ。花車が出るという声のころ、教会の横戸から白花を届けたの」",
            "「花は脇室の入口に置いた。祭壇へは近づいていないし、盆には花だけ。二つ鐘ごろにはセラに返したわ」"
          ]
        },
        {
          "id": "mira_packing",
          "title": "ミラがまとめた荷",
          "kind": "調査記録",
          "body": [
            "ミラ：「教会から戻って、白い包みを作って運び箱へ入れたのは私よ。箱はこの作業台の脇に置いたまま。ふたに封はしていない」",
            "「祭りの荷の取り違えがないか、仕事場のものは点検していい。紙の控えは焼いたパンの数よ」"
          ]
        },
        {
          "id": "mira_relationship",
          "title": "窯棚の修理",
          "kind": "調査記録",
          "body": [
            "ミラ：「去年、うちの窯棚が崩れたとき、テオが直してくれた。代金は要らないと言ってね。最近仕事が減ったことは、本人から聞いたわ」"
          ]
        },
        {
          "id": "tray_surface",
          "title": "花盆の底",
          "kind": "調査記録",
          "body": [
            "盆の底に、湿った白い花の茎が円く押しつぶされた部分がある。円の一部だけ短く平らで、そこから溝へ細い擦り傷が続いている。"
          ]
        },
        {
          "id": "tray_chip",
          "title": "花盆の溝",
          "kind": "調査記録",
          "body": [
            "内側の溝に青い薄片が挟まっている。割れ口が二度折れ曲がり、表面に白い筋がある。溝のほかの部分は洗われて薄い紫色が残っている。"
          ]
        },
        {
          "id": "chip_join",
          "title": "並べた二つの薄片",
          "kind": "調査記録",
          "body": [
            "祭壇の薄片と盆の薄片は、二つの折れ曲がった割れ口が合う。白い筋もその境で一本につながる。青い色が同じというだけではない。"
          ],
          "image": "assets/enamel-shards-only.svg",
          "imageAlt": "祭壇と花盆の薄片の割れ口と白い筋の比較"
        },
        {
          "id": "foot_comparison",
          "title": "押し跡と実寸写し",
          "kind": "調査記録",
          "body": [
            "盆の押し跡と台帳の足の写しを重ねた。直径と、一か所の短い平らな輪郭が重なる。押し跡だけで品物の持ち主は分からない。"
          ],
          "image": "assets/foot-comparison.svg",
          "imageAlt": "一か所の短い平らな縁を含む、盆の押し跡と台帳の輪郭の同縮尺比較"
        },
        {
          "id": "sera_first",
          "title": "セラの今朝の説明",
          "kind": "調査記録",
          "body": [
            "セラ：「朝は染場で仕事をしていた。教会には行っていないわ。テオもそう言ってくれているのでしょう」",
            "「外套と盆は戻っている。道具のことなら聞いて」"
          ]
        },
        {
          "id": "tray_custody",
          "title": "花盆の貸し借り",
          "kind": "調査記録",
          "body": [
            "セラ：「水汲みの声のあと、この盆を洗って溝を木べらでさらった。それからミラに外套と一緒に貸したの」",
            "「二つ鐘のころミラが返した。ここへ置いて、まだ洗い直していない。洗ったときには青い欠片はなかったわ」"
          ]
        },
        {
          "id": "knot_sample",
          "title": "染め束の結び",
          "kind": "調査記録",
          "body": [
            "染め束の紐は、輪を二重に重ね、片端を内へ返して留めてある。色の違う束にも同じ形の結びがある。"
          ]
        },
        {
          "id": "memorial_note",
          "title": "小さな棚の札",
          "kind": "調査記録",
          "body": [
            "紫の布の内側に小さな札が結ばれている。「父ロエンへ。言いすぎた日のことを、今も覚えています」",
            "布の結びは二重の輪で、端が内側へ返されている。蝋燭の根元には柔らかい新しい蝋がある。"
          ]
        },
        {
          "id": "knot_comparison",
          "title": "二つの結び",
          "kind": "調査記録",
          "body": [
            "祈り棚の布と染め束の紐を図に写して比べた。輪を重ねる順序と、端を内へ通す形が同じだ。同じ形を結べる人が一人とは限らない。"
          ]
        },
        {
          "id": "sera_memorial",
          "title": "セラが隠した訪問",
          "kind": "調査記録",
          "body": [
            "人目のないところで札について尋ねると、セラはうなずいた。「父ロエンのことよ。仲直りしないまま死に別れて、もう弔わないと言ってしまった。今さら皆に知られたくなかった」",
            "「一つ鐘のあとに行った。帰り際、祭壇の布が片寄っていたから上げて直したの。そのとき銀の杯と欠けのない青い縁を見た。井戸から『水が上がったよ』と聞こえたわ」"
          ],
          "supersedes": "sera_first"
        },
        {
          "id": "alibi_conflict",
          "title": "二人の朝の説明",
          "kind": "調査記録",
          "body": [
            "テオはセラと朝じゅう工房にいたと言い、セラは染場で働いていたと言う。場所の説明が両方そのまま成り立つわけではない。どちらがどの部分を確かめたのか、聞き直せる。"
          ]
        },
        {
          "id": "mira_contact",
          "title": "祭壇に近づいたミラ",
          "kind": "調査記録",
          "body": [
            "ミラ：「……祭壇へ近づいていない、は取り消す。盆を祭壇まで持っていったし、杯を盆へ載せた」",
            "「そのあとのことを聞くなら、現物を見ながらにして。戻ってまとめた荷も、台の脇にある」"
          ],
          "supersedes": "mira_first"
        },
        {
          "id": "chest_layers",
          "title": "運び箱の中",
          "kind": "調査記録",
          "body": [
            "運び箱にはパンの小包と、乾いた籾殻を敷いた布がある。籾殻の下へ布の折り返しが続いている。片側だけ布が盛り上がり、端に湿った白い花弁が一枚挟まる。"
          ]
        },
        {
          "id": "wrapped_item",
          "title": "敷き布の内側",
          "kind": "調査記録",
          "body": [
            "折り返しを持ち上げると、内側に白い布包みがある。パンより重く、布越しに硬い縁と細いくびれを感じる。"
          ]
        },
        {
          "id": "found_cup",
          "title": "白い包みの銀器",
          "kind": "調査記録",
          "body": [
            "白い包みをほどくと、銀の杯が出てきた。足の青い七宝が欠け、その境に白い筋が残っている。底には「ロエン家」と三つ葉、右の葉に小さな切れ目が刻まれている。"
          ]
        },
        {
          "id": "cup_identified",
          "title": "台帳と銀器",
          "kind": "調査記録",
          "body": [
            "包みの杯の刻印は、台帳の三つ葉の切れ目と家名の写しに合う。足の形も実寸写しに重なる。青い七宝には新しい欠けがある。"
          ]
        },
        {
          "id": "cup_fracture",
          "title": "杯と祭壇の薄片",
          "kind": "調査記録",
          "body": [
            "包みの杯の欠けた場所に、祭壇の薄片が無理なく収まる。白い焼きむらの筋が境で続く。"
          ]
        },
        {
          "id": "mira_admission",
          "title": "ミラが持ち出したもの",
          "kind": "調査記録",
          "body": [
            "ミラは包みを見た。「それは私が教会から持って帰った杯。ほかの人が箱へ入れたのではないわ。花だけと言ったのも嘘」",
            "「水車の方で声がして、オルンが出ていくのを見た。あのときなら誰にも止められないと思った。……まだ、戻せると思っていた」",
            "あなたは回収した杯と、本人が認めた持ち出しを別々に記録した。"
          ]
        },
        {
          "id": "mira_motive",
          "title": "ミラが考えていた支払い",
          "kind": "調査記録",
          "body": [
            "ミラ：「銀を売って、テオの借金を返すつもりだった。窯棚を救ってくれた人の工房がなくなるのが嫌だったの」",
            "「本人には頼まれていないし、売り先ともまだ話していない。水車が止まることも知らなかった。勝手に、間に合うと思った」"
          ]
        },
        {
          "id": "signals",
          "title": "村で聞こえた声",
          "kind": "調査記録",
          "body": [
            "貼り紙に、朝の一つ鐘・井戸の水汲み・花車の出発・祭りの二つ鐘の予定が書かれている。水車の呼び声は予定にない。",
            "広場で聞き合わせると、今日は一つ鐘、井戸の「水が上がったよ」、水車の「取水口を見てくれ」、花車の「出るぞ」、二つ鐘、杯の発見の順だった。これは前後関係で、正確な時刻ではない。"
          ]
        },
        {
          "id": "neri_first",
          "title": "ネリが気づいたこと",
          "kind": "調査記録",
          "body": [
            "ネリ：「今朝は回っていたのに、水車へ来る水が急に細くなった。取水口の柄が上がらない。覆いの中はまだ見ていない」",
            "「故障かと思って『取水口を見てくれ』と呼んだ。教会からオルンが来た。花車の声はそのあとだよ」"
          ]
        },
        {
          "id": "neri_visit",
          "title": "取水口での挨拶",
          "kind": "調査記録",
          "body": [
            "ネリ：「一つ鐘のあと、取水口でテオと顔を合わせた。借りていた寸法棒を返しに来たと言っていたよ。名を呼んで挨拶した」",
            "「私は挽き台へ戻った。そのときはまだ水車が回っていた。その先、あの人が何をしたかまでは見ていない」"
          ]
        },
        {
          "id": "repair_work",
          "title": "水車小屋の仕事札",
          "kind": "調査記録",
          "body": [
            "仕事札には、先月の水路の木枠の修理、職人テオへの工賃の記録がある。今回の修理依頼や金額はまだ書かれていない。",
            "ネリ：「木の枠や柄ならテオに頼むことはある。でも今回はまだ中も見ていないし、仕事を頼んでいない」"
          ]
        },
        {
          "id": "water_flow",
          "title": "取水口と水の道",
          "kind": "調査記録",
          "body": [
            "本流は流れている。分かれた水車用の水路だけが細い。低く下がった水門板の手前で水が本流側へ回る。操作柄を上げようとしても、途中で硬く止まる。"
          ]
        },
        {
          "id": "sluice_block",
          "title": "覆いの内側",
          "kind": "調査記録",
          "body": [
            "覆いの中で、上がるはずの木の歯竿と固定した横木の間に、小さな木片が挟まっている。木片の段差は歯竿の形に沿う。下がった水門が上がる余地をふさいでいる。",
            "木片には樹皮や水に流されて丸まった縁がない。乾いた削り面と、鉛筆で引いた二本の線がある。"
          ]
        },
        {
          "id": "removed_stop",
          "title": "取り出した木片",
          "kind": "調査記録",
          "body": [
            "挟まっていた木片を取り出した。片面に段差が削られ、端は斜めに裂けている。二本の鉛筆線が端で途切れる。木目の一筋が、途中で小さく曲がっている。"
          ]
        },
        {
          "id": "mill_restored",
          "title": "水門を上げたあと",
          "kind": "調査記録",
          "body": [
            "木片を除いたあと、ネリと操作柄を上げた。水門板が持ち上がると水車用の水路に水が戻り、水車がゆっくり回り始めた。",
            "歯竿も車軸も交換していない。ネリ：「あの木片が上がる邪魔をしていたんだ。流木が外から入る場所でもない」"
          ]
        },
        {
          "id": "workshop_offcut",
          "title": "木材棚の短い板",
          "kind": "調査記録",
          "body": [
            "木材棚に、片端が最近裂けた短い板がある。二本の鉛筆線がその端で途切れ、片側に段差を削りかけた跡がある。棚には、使い終えた寸法棒と普通の木くずも並んでいる。"
          ]
        },
        {
          "id": "stop_match",
          "title": "木片と短い板",
          "kind": "調査記録",
          "body": [
            "取り出した木片と棚の板を並べると、斜めの裂け目が重なる。曲がった木目と二本の鉛筆線が境を越えてつながる。",
            "同じ板から分かれたと確かめられるが、誰がいつ水門へ入れたかまでは、この照合だけでは分からない。"
          ]
        },
        {
          "id": "visit_conflict",
          "title": "テオの居場所の食い違い",
          "kind": "調査記録",
          "body": [
            "テオは朝じゅう工房にいたと言う。ネリは一つ鐘のあと取水口でテオの顔を見て挨拶したと言う。同じ朝の、重なる時間の説明が食い違っている。"
          ]
        },
        {
          "id": "theo_visit_revision",
          "title": "テオの取水口への訪問",
          "kind": "調査記録",
          "body": [
            "テオ：「寸法棒を返しに行った。それは本当だ。ずっと工房と言ったのは嘘だった」",
            "「水車のことで呼び声がしたあとは工房に戻っていた。花車の声で窓を見た。灰色の外套と盆が教会へ入るところが見えたが、顔までは見ていない」"
          ],
          "supersedes": "theo_first"
        },
        {
          "id": "theo_admission",
          "title": "テオが挟んだ木片",
          "kind": "調査記録",
          "body": [
            "木片の収まりと板の続き、訪問の話を示すと、テオはうつむいた。「俺が切って、あそこへ挟んだ。修理を支えるためじゃない。水門を下げてから木片を挟み、上げられなくして水車を止めた」",
            "「枠が傷んだように見えれば、新しい仕事を頼まれるかもしれないと思った。工賃で返済を少しでも進めたかった。頼まれる保証もないのに……」",
            "「戻り道でネリの『取水口を見てくれ』が聞こえた。ミラには何も言っていない。杯のことも知らなかった」。あなたは、本人が認めた取り付けと、現場で観察した木片の収まりを記録した。"
          ]
        },
        {
          "id": "shared_sequence",
          "title": "二つの出来事を並べた記録",
          "kind": "調査記録",
          "body": [
            "ネリの呼び声でオルンが教会を離れた。ミラはそれを見て持ち出しの機会にしたと認めた。テオは木片で水車を止めたと認めている。",
            "テオは木片で停止を起こし、ミラはその呼び声で教会が空くのを見て機会にしたと話した。停止と持ち出しは、別の場所の出来事だが無関係ではなかった。"
          ]
        }
      ],
      "objects": [
        {
          "id": "theo",
          "location": "workshop",
          "name": "テオ",
          "description": "作業台の前で、飾りの紐を巻いている。",
          "actions": [
            "theo-morning",
            "theo-work"
          ]
        },
        {
          "id": "loan",
          "location": "workshop",
          "name": "木の札",
          "description": "作業机に、薄い木の札と控えが置かれている。",
          "actions": [
            "loan-front",
            "loan-back"
          ]
        },
        {
          "id": "window",
          "location": "workshop",
          "name": "西の窓",
          "description": "外へ開いた窓。向こうに教会の横手がある。",
          "actions": [
            "window-look",
            "window-sill"
          ]
        },
        {
          "id": "timbers",
          "location": "workshop",
          "name": "木材棚",
          "description": "長い材、短い板、寸法棒が重ねられている。",
          "actions": [
            "timbers-front",
            "timbers-short"
          ]
        },
        {
          "id": "orn",
          "location": "church",
          "name": "オルン",
          "description": "正面の敷居に立ち、祭壇を気にしている。",
          "actions": [
            "orn-last",
            "orn-cup"
          ]
        },
        {
          "id": "altar",
          "location": "church",
          "name": "白布を掛けた祭壇",
          "description": "厚い白布の下に、小さな器ほどの輪郭がある。",
          "actions": [
            "altar-edge",
            "altar-lift",
            "altar-recess",
            "altar-lower"
          ],
          "views": [
            {
              "requiresState": {
                "altarCover": "up"
              },
              "text": "白布を上げた祭壇。固定した木枠の内側に、丸いくぼみがある。",
              "image": "assets/altar-uncovered.png",
              "imageAlt": "白布を上げた祭壇の近景"
            },
            {
              "requiresState": {
                "altarCover": "down"
              },
              "text": "白布を戻した祭壇。木枠に沿った輪郭が見える。",
              "image": "assets/altar-covered.png",
              "imageAlt": "白布を戻した祭壇"
            }
          ]
        },
        {
          "id": "inventory",
          "location": "church",
          "name": "壁際の帳面",
          "description": "祭礼具の名を記した、紐綴じの台帳。",
          "actions": [
            "inventory-front",
            "inventory-fold"
          ]
        },
        {
          "id": "side-door",
          "location": "church",
          "name": "横戸",
          "description": "祭壇の脇から、小さな部屋へ続く戸。",
          "actions": [
            "door-latch"
          ]
        },
        {
          "id": "mira",
          "location": "bakery",
          "name": "ミラ",
          "description": "窯から離れ、焼き台の脇にいる。",
          "actions": [
            "mira-delivery",
            "mira-packing",
            "mira-friend",
            "mira-why"
          ]
        },
        {
          "id": "bakery-bench",
          "location": "bakery",
          "name": "焼き台",
          "description": "粉の跡と、パンの数を書いた紙がある。",
          "actions": [
            "bakery-paper",
            "bakery-flour"
          ]
        },
        {
          "id": "bread-rack",
          "location": "bakery",
          "name": "冷まし棚",
          "description": "焼けたパンを、浅い木枠に並べてある。",
          "actions": [
            "bread-count"
          ]
        },
        {
          "id": "delivery-chest",
          "location": "bakery",
          "name": "運び箱",
          "description": "ふたを載せた木箱。祭りに運ぶ荷が入っている。",
          "actions": [
            "chest-open",
            "chest-packages",
            "chest-fold",
            "chest-unwrap",
            "chest-recheck"
          ],
          "views": [
            {
              "requiresState": {
                "chest": "open"
              },
              "text": "ふたを開けた箱。パンの小包の下へ敷き布の折り返しが続いている。"
            },
            {
              "requiresState": {
                "lining": "lifted"
              },
              "text": "敷き布の下に白い包みがある。包みをほどくか、まわりの荷を確かめられる。"
            },
            {
              "requiresState": {
                "package": "unwrapped"
              },
              "text": "敷き布と白い包みは広げてある。取り出した銀器は脇の台に置き、形や刻印を確かめられる。"
            }
          ]
        },
        {
          "id": "sera",
          "location": "dye-yard",
          "name": "セラ",
          "description": "染め束を干し、道具を片づけている。",
          "actions": [
            "sera-morning",
            "sera-loan"
          ]
        },
        {
          "id": "tray",
          "location": "dye-yard",
          "name": "浅い木の盆",
          "description": "洗い場の横に、花の茎が残った浅い盆が置かれている。",
          "actions": [
            "tray-bottom",
            "tray-rim",
            "tray-under"
          ]
        },
        {
          "id": "cloak",
          "location": "dye-yard",
          "name": "灰色の外套",
          "description": "干し台に掛けた、深い頭巾の外套。",
          "actions": [
            "cloak-lining"
          ]
        },
        {
          "id": "dye-knots",
          "location": "dye-yard",
          "name": "染め束",
          "description": "色ごとにまとめた布を紐で留めてある。",
          "actions": [
            "knot-look"
          ]
        },
        {
          "id": "prayer-shelf",
          "location": "church-storage",
          "name": "小さな棚",
          "description": "蝋燭と布が置かれている。紫の布の内側に紙の端が見える。",
          "actions": [
            "shelf-surface",
            "shelf-note"
          ]
        },
        {
          "id": "candle",
          "location": "church-storage",
          "name": "蝋燭",
          "description": "棚の端に、短い蝋燭が立っている。",
          "actions": [
            "candle-base"
          ]
        },
        {
          "id": "bell-notice",
          "location": "bell-tower",
          "name": "合図の貼り紙",
          "description": "祭りの仕事と、声を掛ける順番が書かれている。",
          "actions": [
            "signals-read"
          ]
        },
        {
          "id": "home-notes",
          "location": "square",
          "name": "里帰りの手帳",
          "description": "町の書記の手伝いを始めて、初めての里帰り。昔の友人のいる村だ。",
          "actions": [
            "home-read"
          ]
        },
        {
          "id": "neri",
          "location": "watermill",
          "name": "ネリ",
          "description": "粉挽き小屋の前で、空の粉袋を手にしている。",
          "actions": [
            "neri-symptom",
            "neri-morning"
          ]
        },
        {
          "id": "mill-wheel",
          "location": "watermill",
          "name": "水車と水路",
          "description": "車輪の面に沿って水路が通り、軸は岸の小屋へ伸びている。",
          "actions": [
            "wheel-look"
          ]
        },
        {
          "id": "mill-board",
          "location": "watermill",
          "name": "仕事札",
          "description": "小屋の壁に、納品と修理の札が掛かっている。",
          "actions": [
            "repair-read"
          ]
        },
        {
          "id": "sluice",
          "location": "sluice",
          "name": "取水口の操作部",
          "description": "小さな水路の入口に水門板がある。木の操作柄の根元には板の覆いがある。",
          "actions": [
            "sluice-flow",
            "sluice-open",
            "sluice-inspect-stop",
            "sluice-remove-stop",
            "sluice-raise",
            "sluice-empty",
            "sluice-flow-restored"
          ],
          "views": [
            {
              "requiresState": {
                "sluiceCover": "open"
              },
              "text": "覆いを上げた操作部。上下する歯竿と、固定した横木の間を見られる。"
            },
            {
              "requiresState": {
                "sluiceBlock": "removed"
              },
              "text": "間に挟まっていた木片は取り出した。水門板はまだ低い位置にある。"
            },
            {
              "requiresState": {
                "sluiceGate": "raised"
              },
              "text": "水門板を上げた。水車用の水路へ、水が戻っている。"
            }
          ]
        },
        {
          "id": "riverbank",
          "location": "sluice",
          "name": "水路の岸",
          "description": "本流と小さな水路の分かれ目に、踏み石がある。",
          "actions": [
            "bank-look"
          ]
        }
      ],
      "actions": [
        {
          "id": "theo-morning",
          "object": "theo",
          "label": "今朝のことを聞く",
          "result": [
            "テオ：「借金は片づいた。この札に『受領』ってあるだろう」",
            "「朝の一つ鐘から二つ鐘までは工房だ。セラもずっと一緒に飾りを結んでいた。教会には行っていないはずさ」"
          ],
          "evidence": [
            "theo_first"
          ],
          "title": "テオの今朝の説明"
        },
        {
          "id": "theo-work",
          "object": "theo",
          "label": "最近の仕事を聞く",
          "result": [
            "テオ：「飾りも棚も作る。水車小屋の木枠も直したことがある。今は頼まれる仕事が少ないんだ」"
          ],
          "evidence": []
        },
        {
          "id": "loan-front",
          "object": "loan",
          "label": "表を読む",
          "result": [
            "木の札の表に「貸付 銀貨五枚／受領 木工職人テオ／返す日 収穫祭」とある。五本の刻みが並ぶ。"
          ],
          "evidence": [
            "loan_front"
          ],
          "title": "借用札の表"
        },
        {
          "id": "loan-back",
          "object": "loan",
          "label": "裏返して控えを見る",
          "result": [
            "裏の書式：「受領は借り手が元金を受けた印。返済時は貸し手が刻みを横線で消す」",
            "札の五本の刻みに横線はない。控えの追記は「残り五枚、祭りの日まで」。"
          ],
          "evidence": [
            "loan_back"
          ],
          "title": "借用札の裏と控え"
        },
        {
          "id": "window-look",
          "object": "window",
          "label": "窓辺に立つ",
          "result": [
            "西窓から教会の横戸が見える。横戸へ入る人は窓に背を向ける。頭巾を被ると、顔よりも背中と手に持つ盆が見える位置だ。"
          ],
          "evidence": [
            "window_view"
          ],
          "title": "工房の西窓"
        },
        {
          "id": "window-sill",
          "object": "window",
          "label": "窓枠を見る",
          "result": [
            "古い木くずと乾いた塗料が付いている。今日ついたと分かる跡はない。"
          ],
          "evidence": []
        },
        {
          "id": "timbers-front",
          "object": "timbers",
          "label": "手前の材を見る",
          "result": [
            "祭りの飾りに使う薄い棒だ。両端に紐穴がある。"
          ],
          "evidence": []
        },
        {
          "id": "timbers-short",
          "object": "timbers",
          "label": "短い板を取り出す",
          "result": [
            "木材棚に、片端が最近裂けた短い板がある。二本の鉛筆線がその端で途切れ、片側に段差を削りかけた跡がある。棚には、使い終えた寸法棒と普通の木くずも並んでいる。"
          ],
          "evidence": [
            "workshop_offcut"
          ],
          "title": "木材棚の短い板"
        },
        {
          "id": "orn-last",
          "object": "orn",
          "label": "最後に見たときを聞く",
          "result": [
            "オルン：「二つ鐘のとき、正面の敷居からいつもの白布の形を見た。杯はあったはずだ」",
            "「水車から呼ばれて、一度は教会を離れた。戻ってもいつもの形だったのだ」"
          ],
          "evidence": [
            "orn_first"
          ],
          "title": "オルンの最後の確認"
        },
        {
          "id": "orn-cup",
          "object": "orn",
          "label": "杯の記録を尋ねる",
          "result": [
            "オルン：「壁際の台帳に、祭礼具の図を残してある。取り違えたときに確かめるためだ」"
          ],
          "evidence": []
        },
        {
          "id": "altar-edge",
          "object": "altar",
          "label": "布の縁を見る",
          "result": [
            "縁はほこりよけのため厚く折り返されている。穴や透ける部分はない。"
          ],
          "evidence": []
        },
        {
          "id": "altar-lift",
          "object": "altar",
          "label": "白布を上げる",
          "result": [
            "白布を上げると、固定された小さな木枠が現れた。その内側の丸いくぼみは空だ。厚い白布を支えるのは木枠だった。"
          ],
          "evidence": [
            "cloth_frame"
          ],
          "setsState": {
            "altarCover": "up"
          },
          "image": "assets/altar-uncovered.png",
          "imageAlt": "白布の下にある木枠と空のくぼみ",
          "title": "白布の下"
        },
        {
          "id": "altar-recess",
          "object": "altar",
          "label": "くぼみの奥を見る",
          "result": [
            "丸いくぼみの奥に、青い七宝の薄片が一つある。縁は二か所で不規則に折れ、表面を細い白い筋が横切っている。"
          ],
          "evidence": [
            "altar_chip"
          ],
          "requiresState": {
            "altarCover": "up"
          },
          "title": "祭壇の青い薄片"
        },
        {
          "id": "altar-lower",
          "object": "altar",
          "label": "布を戻し、敷居へ下がる",
          "result": [
            "空のくぼみを見たあとで白布を戻し、正面の敷居へ下がった。白布の外形は、上げる前と変わらない。布越しに中の銀色は見えない。"
          ],
          "evidence": [
            "cloth_outline"
          ],
          "requiresActions": [
            "altar-lift"
          ],
          "setsState": {
            "altarCover": "down"
          },
          "image": "assets/altar-covered.png",
          "imageAlt": "空の祭壇に白布を戻した状態",
          "title": "布を戻した祭壇"
        },
        {
          "id": "inventory-front",
          "object": "inventory",
          "label": "器のページを読む",
          "result": [
            "台帳に銀の聖杯の図がある。足の周りには青い七宝があり、一か所に白い焼きむらの筋が描かれている。"
          ],
          "evidence": [
            "inventory_front"
          ],
          "title": "祭礼具の台帳"
        },
        {
          "id": "inventory-fold",
          "object": "inventory",
          "label": "折り込みを開く",
          "result": [
            "折り込みには聖杯の底の実寸写しと、「寄進 ロエン家／三つ葉、右の葉に切れ目」の刻印の写しがある。足の輪郭には小さな平らな部分が一か所ある。"
          ],
          "evidence": [
            "inventory_reverse"
          ],
          "title": "台帳の折り込み"
        },
        {
          "id": "door-latch",
          "object": "side-door",
          "label": "戸を押し、留め金を見る",
          "result": [
            "横戸は外から押して開いた。内側の留め金は受けから外れている。木部や金具にこじ開けた傷はない。"
          ],
          "evidence": [
            "side_latch"
          ],
          "title": "横戸の留め金"
        },
        {
          "id": "mira-delivery",
          "object": "mira",
          "label": "花配りについて聞く",
          "result": [
            "ミラ：「セラに灰色の外套と花盆を借りたわ。花車が出るという声のころ、教会の横戸から白花を届けたの」",
            "「花は脇室の入口に置いた。祭壇へは近づいていないし、盆には花だけ。二つ鐘ごろにはセラに返したわ」"
          ],
          "evidence": [
            "mira_first"
          ],
          "title": "ミラの花配り"
        },
        {
          "id": "mira-packing",
          "object": "mira",
          "label": "戻ってからの仕事を聞く",
          "result": [
            "ミラ：「教会から戻って、白い包みを作って運び箱へ入れたのは私よ。箱はこの作業台の脇に置いたまま。ふたに封はしていない」",
            "「祭りの荷の取り違えがないか、仕事場のものは点検していい。紙の控えは焼いたパンの数よ」"
          ],
          "evidence": [
            "mira_packing"
          ],
          "title": "ミラがまとめた荷"
        },
        {
          "id": "mira-friend",
          "object": "mira",
          "label": "テオとの仕事を聞く",
          "result": [
            "ミラ：「去年、うちの窯棚が崩れたとき、テオが直してくれた。代金は要らないと言ってね。最近仕事が減ったことは、本人から聞いたわ」"
          ],
          "evidence": [
            "mira_relationship"
          ],
          "title": "窯棚の修理"
        },
        {
          "id": "mira-why",
          "object": "mira",
          "label": "なぜ持ち出したのか聞く",
          "result": [
            "ミラ：「銀を売って、テオの借金を返すつもりだった。窯棚を救ってくれた人の工房がなくなるのが嫌だったの」",
            "「本人には頼まれていないし、売り先ともまだ話していない。水車が止まることも知らなかった。勝手に、間に合うと思った」"
          ],
          "evidence": [
            "mira_motive"
          ],
          "requires": [
            "mira_admission"
          ],
          "title": "ミラが考えていた支払い"
        },
        {
          "id": "bakery-paper",
          "object": "bakery-bench",
          "label": "紙を読む",
          "result": [
            "「丸パン 二十四／細長いパン 十二」。受け取り欄は空いている。端には小さな丸印が三つある。"
          ],
          "evidence": []
        },
        {
          "id": "bakery-flour",
          "object": "bakery-bench",
          "label": "粉の跡を見る",
          "result": [
            "台の中央に粉が広がり、こねた生地の跡が残る。"
          ],
          "evidence": []
        },
        {
          "id": "bread-count",
          "object": "bread-rack",
          "label": "木枠を持ち上げる",
          "result": [
            "底までパンが並んでいる。丸パンが二十四個、細長いパンが十二個ある。"
          ],
          "evidence": []
        },
        {
          "id": "chest-open",
          "object": "delivery-chest",
          "label": "ふたを開ける",
          "result": [
            "運び箱にはパンの小包と、乾いた籾殻を敷いた布がある。籾殻の下へ布の折り返しが続いている。片側だけ布が盛り上がり、端に湿った白い花弁が一枚挟まる。"
          ],
          "evidence": [
            "chest_layers"
          ],
          "setsState": {
            "chest": "open"
          },
          "requiresState": {
            "chest": "closed"
          },
          "title": "運び箱の中"
        },
        {
          "id": "chest-packages",
          "object": "delivery-chest",
          "label": "上の小包を確かめる",
          "result": [
            "上段の小包には丸パンが入っている。包み紙は焼き台のものと同じだ。"
          ],
          "evidence": [],
          "requiresState": {
            "chest": "open"
          }
        },
        {
          "id": "chest-fold",
          "object": "delivery-chest",
          "label": "敷き布の折り返しを持ち上げる",
          "result": [
            "折り返しを持ち上げると、内側に白い布包みがある。パンより重く、布越しに硬い縁と細いくびれを感じる。"
          ],
          "evidence": [
            "wrapped_item"
          ],
          "requiresState": {
            "chest": "open",
            "lining": "down"
          },
          "setsState": {
            "lining": "lifted"
          },
          "title": "敷き布の内側"
        },
        {
          "id": "chest-unwrap",
          "object": "delivery-chest",
          "label": "内側の包みをほどく",
          "result": [
            "白い包みをほどくと、銀の杯が出てきた。足の青い七宝が欠け、その境に白い筋が残っている。底には「ロエン家」と三つ葉、右の葉に小さな切れ目が刻まれている。"
          ],
          "evidence": [
            "found_cup"
          ],
          "requiresState": {
            "lining": "lifted",
            "package": "wrapped"
          },
          "setsState": {
            "package": "unwrapped"
          },
          "title": "白い包みの銀器"
        },
        {
          "id": "sera-morning",
          "object": "sera",
          "label": "今朝のことを聞く",
          "result": [
            "セラ：「朝は染場で仕事をしていた。教会には行っていないわ。テオもそう言ってくれているのでしょう」",
            "「外套と盆は戻っている。道具のことなら聞いて」"
          ],
          "evidence": [
            "sera_first"
          ],
          "title": "セラの今朝の説明"
        },
        {
          "id": "sera-loan",
          "object": "sera",
          "label": "道具の貸し借りを聞く",
          "result": [
            "セラ：「水汲みの声のあと、この盆を洗って溝を木べらでさらった。それからミラに外套と一緒に貸したの」",
            "「二つ鐘のころミラが返した。ここへ置いて、まだ洗い直していない。洗ったときには青い欠片はなかったわ」"
          ],
          "evidence": [
            "tray_custody"
          ],
          "title": "花盆の貸し借り"
        },
        {
          "id": "tray-bottom",
          "object": "tray",
          "label": "内側の底を見る",
          "result": [
            "盆の底に、湿った白い花の茎が円く押しつぶされた部分がある。円の一部だけ短く平らで、そこから溝へ細い擦り傷が続いている。"
          ],
          "evidence": [
            "tray_surface"
          ],
          "title": "花盆の底"
        },
        {
          "id": "tray-rim",
          "object": "tray",
          "label": "縁の溝をなぞる",
          "result": [
            "内側の溝に青い薄片が挟まっている。割れ口が二度折れ曲がり、表面に白い筋がある。溝のほかの部分は洗われて薄い紫色が残っている。"
          ],
          "evidence": [
            "tray_chip"
          ],
          "title": "花盆の溝"
        },
        {
          "id": "tray-under",
          "object": "tray",
          "label": "裏返して底板を見る",
          "result": [
            "底板には古い修繕釘が二本ある。青い塗料は塗られていない。"
          ],
          "evidence": []
        },
        {
          "id": "cloak-lining",
          "object": "cloak",
          "label": "裏地と袖口を見る",
          "result": [
            "裏地に名札や家紋はない。袖口は使い込まれ、誰が今朝着たかを決められる印は見つからない。"
          ],
          "evidence": []
        },
        {
          "id": "knot-look",
          "object": "dye-knots",
          "label": "紐の通り方を見る",
          "result": [
            "染め束の紐は、輪を二重に重ね、片端を内へ返して留めてある。色の違う束にも同じ形の結びがある。"
          ],
          "evidence": [
            "knot_sample"
          ],
          "title": "染め束の結び"
        },
        {
          "id": "shelf-surface",
          "object": "prayer-shelf",
          "label": "棚を見渡す",
          "result": [
            "古い飾りにはほこりがある。紫の布の近くだけ、蝋がまだ柔らかい。"
          ],
          "evidence": []
        },
        {
          "id": "shelf-note",
          "object": "prayer-shelf",
          "label": "布の内側の札を読む",
          "result": [
            "紫の布の内側に小さな札が結ばれている。「父ロエンへ。言いすぎた日のことを、今も覚えています」",
            "布の結びは二重の輪で、端が内側へ返されている。蝋燭の根元には柔らかい新しい蝋がある。"
          ],
          "evidence": [
            "memorial_note"
          ],
          "title": "小さな棚の札"
        },
        {
          "id": "candle-base",
          "object": "candle",
          "label": "台座を見る",
          "result": [
            "小さな蝋の滴が固まりかけている。これだけで、結んだ人物や正確な時刻は分からない。"
          ],
          "evidence": []
        },
        {
          "id": "signals-read",
          "object": "bell-notice",
          "label": "今日聞こえた順番を聞き合わせる",
          "result": [
            "貼り紙に、朝の一つ鐘・井戸の水汲み・花車の出発・祭りの二つ鐘の予定が書かれている。水車の呼び声は予定にない。",
            "広場で聞き合わせると、今日は一つ鐘、井戸の「水が上がったよ」、水車の「取水口を見てくれ」、花車の「出るぞ」、二つ鐘、杯の発見の順だった。これは前後関係で、正確な時刻ではない。"
          ],
          "evidence": [
            "signals"
          ],
          "title": "村で聞こえた声"
        },
        {
          "id": "home-read",
          "object": "home-notes",
          "label": "人との関係を読み返す",
          "result": [
            "テオは幼なじみ。ミラとは仕事を融通し合っている。セラは染物職人、オルンは教会の世話役、ネリは粉挽き職人。今立っている場所は、事件当時の居場所を保証しない。"
          ],
          "evidence": []
        },
        {
          "id": "neri-symptom",
          "object": "neri",
          "label": "何が起きたか聞く",
          "result": [
            "ネリ：「今朝は回っていたのに、水車へ来る水が急に細くなった。取水口の柄が上がらない。覆いの中はまだ見ていない」",
            "「故障かと思って『取水口を見てくれ』と呼んだ。教会からオルンが来た。花車の声はそのあとだよ」"
          ],
          "evidence": [
            "neri_first"
          ],
          "title": "ネリが気づいたこと"
        },
        {
          "id": "neri-morning",
          "object": "neri",
          "label": "今朝会った人を聞く",
          "result": [
            "ネリ：「一つ鐘のあと、取水口でテオと顔を合わせた。借りていた寸法棒を返しに来たと言っていたよ。名を呼んで挨拶した」",
            "「私は挽き台へ戻った。そのときはまだ水車が回っていた。その先、あの人が何をしたかまでは見ていない」"
          ],
          "evidence": [
            "neri_visit"
          ],
          "title": "取水口での挨拶"
        },
        {
          "id": "wheel-look",
          "object": "mill-wheel",
          "label": "軸と羽根を見る",
          "result": [
            "羽根の向きは流れに沿い、軸は流れを横切って小屋へつながる。折れた羽根や外れた軸は見当たらない。"
          ],
          "evidence": []
        },
        {
          "id": "repair-read",
          "object": "mill-board",
          "label": "修理の札を読む",
          "result": [
            "仕事札には、先月の水路の木枠の修理、職人テオへの工賃の記録がある。今回の修理依頼や金額はまだ書かれていない。",
            "ネリ：「木の枠や柄ならテオに頼むことはある。でも今回はまだ中も見ていないし、仕事を頼んでいない」"
          ],
          "evidence": [
            "repair_work"
          ],
          "title": "水車小屋の仕事札"
        },
        {
          "id": "sluice-flow",
          "object": "sluice",
          "label": "水の行き先と柄を確かめる",
          "result": [
            "本流は流れている。分かれた水車用の水路だけが細い。低く下がった水門板の手前で水が本流側へ回る。操作柄を上げようとしても、途中で硬く止まる。"
          ],
          "evidence": [
            "water_flow"
          ],
          "requiresState": {
            "sluiceGate": "lowered",
            "sluiceBlock": "seated"
          },
          "title": "取水口と水の道"
        },
        {
          "id": "sluice-open",
          "object": "sluice",
          "label": "板の覆いを上げる",
          "result": [
            "覆いを持ち上げた。根元の木の歯竿と横木が見える。"
          ],
          "evidence": [],
          "setsState": {
            "sluiceCover": "open"
          },
          "image": "assets/sluice-open.png",
          "imageAlt": "覆いを上げた水門の操作部",
          "requiresState": {
            "sluiceCover": "closed"
          }
        },
        {
          "id": "sluice-inspect-stop",
          "object": "sluice",
          "label": "歯竿の間を調べる",
          "result": [
            "覆いの中で、上がるはずの木の歯竿と固定した横木の間に、小さな木片が挟まっている。木片の段差は歯竿の形に沿う。下がった水門が上がる余地をふさいでいる。",
            "木片には樹皮や水に流されて丸まった縁がない。乾いた削り面と、鉛筆で引いた二本の線がある。"
          ],
          "evidence": [
            "sluice_block"
          ],
          "requiresState": {
            "sluiceCover": "open",
            "sluiceBlock": "seated"
          },
          "title": "覆いの内側"
        },
        {
          "id": "sluice-remove-stop",
          "object": "sluice",
          "label": "挟まる木片を取り出す",
          "result": [
            "挟まっていた木片を取り出した。片面に段差が削られ、端は斜めに裂けている。二本の鉛筆線が端で途切れる。木目の一筋が、途中で小さく曲がっている。"
          ],
          "evidence": [
            "removed_stop"
          ],
          "requiresActions": [
            "sluice-inspect-stop"
          ],
          "requiresState": {
            "sluiceCover": "open",
            "sluiceBlock": "seated"
          },
          "setsState": {
            "sluiceBlock": "removed"
          },
          "image": "assets/sluice-stop-removed.png",
          "imageAlt": "木片を取り出したが、まだ下がっている水門",
          "title": "取り出した木片"
        },
        {
          "id": "sluice-raise",
          "object": "sluice",
          "label": "ネリと操作柄を上げる",
          "result": [
            "木片を除いたあと、ネリと操作柄を上げた。水門板が持ち上がると水車用の水路に水が戻り、水車がゆっくり回り始めた。",
            "歯竿も車軸も交換していない。ネリ：「あの木片が上がる邪魔をしていたんだ。流木が外から入る場所でもない」"
          ],
          "evidence": [
            "mill_restored"
          ],
          "requiresState": {
            "sluiceBlock": "removed",
            "sluiceGate": "lowered"
          },
          "setsState": {
            "sluiceGate": "raised"
          },
          "image": "assets/sluice-raised.png",
          "imageAlt": "木片を取り出して水門を上げ、水路に水が戻った状態",
          "title": "水門を上げたあと"
        },
        {
          "id": "bank-look",
          "object": "riverbank",
          "label": "踏み石を見る",
          "result": [
            "人が通れる踏み石だ。泥の跡は重なっている。靴や人物を一人に特定できる跡は残っていない。"
          ],
          "evidence": []
        },
        {
          "id": "chest-recheck",
          "object": "delivery-chest",
          "label": "開いた包みを見直す",
          "result": [
            "白い包みは空になっている。取り出した銀器は脇の台に置かれている。"
          ],
          "evidence": [],
          "requiresState": {
            "package": "unwrapped"
          }
        },
        {
          "id": "sluice-empty",
          "object": "sluice",
          "label": "歯竿の間を見直す",
          "result": [
            "木片を取り出した場所が空いている。削れた傷があるが、別の物は挟まっていない。"
          ],
          "evidence": [],
          "requiresState": {
            "sluiceBlock": "removed"
          }
        },
        {
          "id": "sluice-flow-restored",
          "object": "sluice",
          "label": "水の行き先を見直す",
          "result": [
            "上がった水門の下から水車用の水路へ水が流れている。本流側も流れが続いている。"
          ],
          "evidence": [],
          "requiresState": {
            "sluiceGate": "raised"
          },
          "image": "assets/sluice-raised.png",
          "imageAlt": "水門を上げた後の本流と水車用水路"
        }
      ],
      "comparisons": [
        {
          "id": "loan-pair",
          "pair": [
            "loan_front",
            "loan_back"
          ],
          "title": "借用札を表裏から読む",
          "result": [
            "「受領」の名は借り手テオ。返済を示す横線はなく、控えにも残り五枚と記されている。"
          ],
          "evidence": [
            "loan_reading"
          ]
        },
        {
          "id": "chips",
          "pair": [
            "altar_chip",
            "tray_chip"
          ],
          "title": "割れ口を合わせる",
          "result": [
            "祭壇の薄片と盆の薄片は、二つの折れ曲がった割れ口が合う。白い筋もその境で一本につながる。青い色が同じというだけではない。"
          ],
          "evidence": [
            "chip_join"
          ]
        },
        {
          "id": "foot",
          "pair": [
            "tray_surface",
            "inventory_reverse"
          ],
          "title": "輪郭を重ねる",
          "result": [
            "盆の押し跡と台帳の足の写しを重ねた。直径と、一か所の短い平らな輪郭が重なる。押し跡だけで品物の持ち主は分からない。"
          ],
          "evidence": [
            "foot_comparison"
          ]
        },
        {
          "id": "knots",
          "pair": [
            "memorial_note",
            "knot_sample"
          ],
          "title": "紐の通り方を比べる",
          "result": [
            "祈り棚の布と染め束の紐を図に写して比べた。輪を重ねる順序と、端を内へ通す形が同じだ。同じ形を結べる人が一人とは限らない。"
          ],
          "evidence": [
            "knot_comparison"
          ]
        },
        {
          "id": "alibis",
          "pair": [
            "theo_first",
            "sera_first"
          ],
          "title": "場所の説明を並べる",
          "result": [
            "テオはセラと朝じゅう工房にいたと言い、セラは染場で働いていたと言う。場所の説明が両方そのまま成り立つわけではない。どちらがどの部分を確かめたのか、聞き直せる。"
          ],
          "evidence": [
            "alibi_conflict"
          ]
        },
        {
          "id": "cup-book",
          "pair": [
            "found_cup",
            "inventory_reverse"
          ],
          "title": "刻印と足の形を比べる",
          "result": [
            "包みの杯の刻印は、台帳の三つ葉の切れ目と家名の写しに合う。足の形も実寸写しに重なる。青い七宝には新しい欠けがある。"
          ],
          "evidence": [
            "cup_identified"
          ]
        },
        {
          "id": "cup-chip",
          "pair": [
            "found_cup",
            "altar_chip"
          ],
          "title": "欠けた場所に薄片を合わせる",
          "result": [
            "包みの杯の欠けた場所に、祭壇の薄片が無理なく収まる。白い焼きむらの筋が境で続く。"
          ],
          "evidence": [
            "cup_fracture"
          ]
        },
        {
          "id": "stop-stock",
          "pair": [
            "removed_stop",
            "workshop_offcut"
          ],
          "title": "木目と裂け目を合わせる",
          "result": [
            "取り出した木片と棚の板を並べると、斜めの裂け目が重なる。曲がった木目と二本の鉛筆線が境を越えてつながる。",
            "同じ板から分かれたと確かめられるが、誰がいつ水門へ入れたかまでは、この照合だけでは分からない。"
          ],
          "evidence": [
            "stop_match"
          ]
        },
        {
          "id": "visit-statements",
          "pair": [
            "theo_first",
            "neri_visit"
          ],
          "title": "今朝の居場所を比べる",
          "result": [
            "テオは朝じゅう工房にいたと言う。ネリは一つ鐘のあと取水口でテオの顔を見て挨拶したと言う。同じ朝の、重なる時間の説明が食い違っている。"
          ],
          "evidence": [
            "visit_conflict"
          ]
        },
        {
          "id": "shared-events",
          "pair": [
            "mira_admission",
            "theo_admission"
          ],
          "title": "二つの説明を並べる",
          "result": [
            "ネリの呼び声でオルンが教会を離れた。ミラはそれを見て持ち出しの機会にしたと認めた。テオは木片で水車を止めたと認めている。",
            "テオは木片で停止を起こし、ミラはその呼び声で教会が空くのを見て機会にしたと話した。停止と持ち出しは、別の場所の出来事だが無関係ではなかった。"
          ],
          "evidence": [
            "shared_sequence"
          ]
        }
      ],
      "responses": [
        {
          "id": "theo-debt",
          "person": "theo",
          "topic": "morning",
          "selectedAll": [
            "loan_reading"
          ],
          "title": "テオの言い直し",
          "result": [
            "テオ：「まだ五枚残ってる。お前に心配されたくなくて、ごまかした」",
            "「ミラには昨日話した。でも、あいつに金策を頼んだり、何かを売れと相談したりはしていない」"
          ],
          "evidence": [
            "theo_debt"
          ],
          "priority": 10
        },
        {
          "id": "theo-debt-direct",
          "person": "theo",
          "topic": "morning",
          "selectedAll": [
            "loan_front",
            "loan_back"
          ],
          "title": "テオの言い直し",
          "result": [
            "テオ：「まだ五枚残ってる。お前に心配されたくなくて、ごまかした」",
            "「ミラには昨日話した。でも、あいつに金策を頼んだり、何かを売れと相談したりはしていない」"
          ],
          "evidence": [
            "theo_debt"
          ],
          "priority": 10
        },
        {
          "id": "theo-alibi",
          "person": "theo",
          "topic": "morning",
          "selectedAll": [
            "alibi_conflict"
          ],
          "title": "一緒だったという話",
          "result": [
            "テオ：「セラとずっと一緒、は嘘だ。花車の『出るぞ』という声のころ、灰色の外套で浅い盆を持つ人が教会の横戸へ入るのを見た。顔は見えなかった」",
            "「セラの物だったから本人だと思った。疑われたくないだろうと、ここにいたことにした。……あいつを守るつもりだった」"
          ],
          "evidence": [
            "theo_sighting"
          ],
          "priority": 10
        },
        {
          "id": "theo-alibi-direct",
          "person": "theo",
          "topic": "morning",
          "selectedAll": [
            "theo_first",
            "sera_first"
          ],
          "title": "一緒だったという話",
          "result": [
            "テオ：「セラとずっと一緒、は嘘だ。花車の『出るぞ』という声のころ、灰色の外套で浅い盆を持つ人が教会の横戸へ入るのを見た。顔は見えなかった」",
            "「セラの物だったから本人だと思った。疑われたくないだろうと、ここにいたことにした。……あいつを守るつもりだった」"
          ],
          "evidence": [
            "theo_sighting"
          ],
          "priority": 10
        },
        {
          "id": "theo-visit",
          "person": "theo",
          "topic": "morning",
          "selectedAll": [
            "visit_conflict"
          ],
          "title": "取水口への訪問",
          "result": [
            "テオ：「寸法棒を返しに行った。それは本当だ。ずっと工房と言ったのは嘘だった」",
            "「水車のことで呼び声がしたあとは工房に戻っていた。花車の声で窓を見た。灰色の外套と盆が教会へ入るところが見えたが、顔までは見ていない」"
          ],
          "evidence": [
            "theo_visit_revision",
            "theo_sighting"
          ],
          "priority": 10
        },
        {
          "id": "theo-visit-direct",
          "person": "theo",
          "topic": "morning",
          "selectedAll": [
            "neri_visit"
          ],
          "title": "取水口への訪問",
          "result": [
            "テオ：「寸法棒を返しに行った。それは本当だ。ずっと工房と言ったのは嘘だった」",
            "「水車のことで呼び声がしたあとは工房に戻っていた。花車の声で窓を見た。灰色の外套と盆が教会へ入るところが見えたが、顔までは見ていない」"
          ],
          "evidence": [
            "theo_visit_revision",
            "theo_sighting"
          ],
          "priority": 10
        },
        {
          "id": "theo-identity",
          "person": "theo",
          "topic": "chalice",
          "selectedAll": [
            "mira_first",
            "theo_sighting"
          ],
          "title": "後ろ姿の人物",
          "result": [
            "テオ：「外套と盆を見ただけだった。ミラが借りていたなら、セラと決めたのは俺だ。顔を確かめてはいない」"
          ],
          "evidence": [
            "theo_identity"
          ],
          "priority": 10
        },
        {
          "id": "orn-outline",
          "person": "orn",
          "topic": "chalice",
          "selectedAll": [
            "cloth_outline"
          ],
          "title": "二つ鐘の確認",
          "result": [
            "オルン：「二つ鐘に布を上げてはいない。最後に実物を見たのは、一つ鐘の前にくぼみを拭いたときだ。青い縁は欠けていなかった」",
            "「水車から『取水口を見てくれ』と呼ばれたので、そちらへ行った。湿気を逃がすため横戸を開けていたのに、留め金を戻さなかった」"
          ],
          "evidence": [
            "orn_revision"
          ],
          "priority": 10
        },
        {
          "id": "orn-frame",
          "person": "orn",
          "topic": "morning",
          "selectedAll": [
            "cloth_frame",
            "orn_first"
          ],
          "title": "布の下を見たか",
          "result": [
            "オルン：「二つ鐘に布を上げてはいない。最後に実物を見たのは、一つ鐘の前にくぼみを拭いたときだ。青い縁は欠けていなかった」",
            "「水車から『取水口を見てくれ』と呼ばれたので、そちらへ行った。湿気を逃がすため横戸を開けていたのに、留め金を戻さなかった」"
          ],
          "evidence": [
            "orn_revision"
          ],
          "priority": 10
        },
        {
          "id": "sera-note",
          "person": "sera",
          "topic": "personal",
          "selectedAll": [
            "memorial_note"
          ],
          "title": "人目のない話",
          "result": [
            "人目のないところで札について尋ねると、セラはうなずいた。「父ロエンのことよ。仲直りしないまま死に別れて、もう弔わないと言ってしまった。今さら皆に知られたくなかった」",
            "「一つ鐘のあとに行った。帰り際、祭壇の布が片寄っていたから上げて直したの。そのとき銀の杯と欠けのない青い縁を見た。井戸から『水が上がったよ』と聞こえたわ」"
          ],
          "evidence": [
            "sera_memorial"
          ],
          "priority": 10
        },
        {
          "id": "sera-knots",
          "person": "sera",
          "topic": "personal",
          "selectedAll": [
            "knot_comparison"
          ],
          "title": "人目のない話",
          "result": [
            "人目のないところで札について尋ねると、セラはうなずいた。「父ロエンのことよ。仲直りしないまま死に別れて、もう弔わないと言ってしまった。今さら皆に知られたくなかった」",
            "「一つ鐘のあとに行った。帰り際、祭壇の布が片寄っていたから上げて直したの。そのとき銀の杯と欠けのない青い縁を見た。井戸から『水が上がったよ』と聞こえたわ」"
          ],
          "evidence": [
            "sera_memorial"
          ],
          "priority": 10
        },
        {
          "id": "sera-alibi",
          "person": "sera",
          "topic": "morning",
          "selectedAll": [
            "alibi_conflict"
          ],
          "title": "セラが確かめたこと",
          "result": [
            "セラ：「テオと工房にいたとは言っていないわ。何を見たのか、本人に聞いて」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "sera-memorial-accuse",
          "person": "sera",
          "topic": "chalice",
          "selectedAll": [
            "memorial_note"
          ],
          "title": "棚の札について",
          "result": [
            "セラ：「あの札を見つけたのね。皆の前では話したくない。杯を盗んだという話とは別よ」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "mira-contact",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "chip_join",
            "tray_custody"
          ],
          "title": "盆に載せたもの",
          "result": [
            "ミラ：「……祭壇へ近づいていない、は取り消す。盆を祭壇まで持っていったし、杯を盆へ載せた」",
            "「そのあとのことを聞くなら、現物を見ながらにして。戻ってまとめた荷も、台の脇にある」"
          ],
          "evidence": [
            "mira_contact",
            "mira_packing"
          ],
          "priority": 10
        },
        {
          "id": "mira-contact-foot",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "chip_join",
            "foot_comparison"
          ],
          "title": "盆に載せたもの",
          "result": [
            "ミラ：「……祭壇へ近づいていない、は取り消す。盆を祭壇まで持っていったし、杯を盆へ載せた」",
            "「そのあとのことを聞くなら、現物を見ながらにして。戻ってまとめた荷も、台の脇にある」"
          ],
          "evidence": [
            "mira_contact",
            "mira_packing"
          ],
          "priority": 10
        },
        {
          "id": "mira-shard-only",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "chip_join"
          ],
          "title": "祭壇との関わり",
          "result": [
            "ミラ：「祭壇のところへ行ったのは認める。でも、破片があることと、杯をどこへ運んだかは同じ話ではないでしょう」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "mira-imprint-only",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "foot_comparison"
          ],
          "title": "盆の押し跡",
          "result": [
            "ミラ：「何かを載せた形には見えるわね。その形だけで、何をどこへ運んだかが分かるの？」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "mira-recovery-cup_identified",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "cup_identified"
          ],
          "title": "回収した杯を前に",
          "result": [
            "ミラは包みを見た。「それは私が教会から持って帰った杯。ほかの人が箱へ入れたのではないわ。花だけと言ったのも嘘」",
            "「水車の方で声がして、オルンが出ていくのを見た。あのときなら誰にも止められないと思った。……まだ、戻せると思っていた」",
            "あなたは回収した杯と、本人が認めた持ち出しを別々に記録した。"
          ],
          "evidence": [
            "mira_admission"
          ],
          "priority": 100,
          "resolves": [
            "chalice"
          ]
        },
        {
          "id": "mira-recovery-cup_fracture",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "cup_fracture"
          ],
          "title": "回収した杯を前に",
          "result": [
            "ミラは包みを見た。「それは私が教会から持って帰った杯。ほかの人が箱へ入れたのではないわ。花だけと言ったのも嘘」",
            "「水車の方で声がして、オルンが出ていくのを見た。あのときなら誰にも止められないと思った。……まだ、戻せると思っていた」",
            "あなたは回収した杯と、本人が認めた持ち出しを別々に記録した。"
          ],
          "evidence": [
            "mira_admission"
          ],
          "priority": 100,
          "resolves": [
            "chalice"
          ]
        },
        {
          "id": "mira-recovery-direct",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "found_cup",
            "inventory_reverse"
          ],
          "title": "杯と台帳を示す",
          "result": [
            "ミラは包みを見た。「それは私が教会から持って帰った杯。ほかの人が箱へ入れたのではないわ。花だけと言ったのも嘘」",
            "「水車の方で声がして、オルンが出ていくのを見た。あのときなら誰にも止められないと思った。……まだ、戻せると思っていた」",
            "あなたは回収した杯と、本人が認めた持ち出しを別々に記録した。"
          ],
          "evidence": [
            "cup_identified",
            "mira_admission"
          ],
          "priority": 100,
          "resolves": [
            "chalice"
          ]
        },
        {
          "id": "mira-raw-cup",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "found_cup"
          ],
          "title": "包みから出た品",
          "result": [
            "ミラ：「教会から戻って、白い包みを作って運び箱へ入れたのは私よ。箱はこの作業台の脇に置いたまま。ふたに封はしていない」",
            "「祭りの荷の取り違えがないか、仕事場のものは点検していい。紙の控えは焼いたパンの数よ」"
          ],
          "evidence": [
            "mira_packing"
          ],
          "priority": 30
        },
        {
          "id": "mira-fracture-direct",
          "person": "mira",
          "topic": "chalice",
          "selectedAll": [
            "found_cup",
            "altar_chip"
          ],
          "title": "杯と薄片を示す",
          "result": [
            "ミラは包みを見た。「それは私が教会から持って帰った杯。ほかの人が箱へ入れたのではないわ。花だけと言ったのも嘘」",
            "「水車の方で声がして、オルンが出ていくのを見た。あのときなら誰にも止められないと思った。……まだ、戻せると思っていた」",
            "あなたは回収した杯と、本人が認めた持ち出しを別々に記録した。"
          ],
          "evidence": [
            "cup_fracture",
            "mira_admission"
          ],
          "priority": 100,
          "resolves": [
            "chalice"
          ]
        },
        {
          "id": "orn-found-cup",
          "person": "orn",
          "topic": "chalice",
          "selectedAll": [
            "found_cup"
          ],
          "title": "持ってきた銀器を確かめる",
          "result": [
            "オルンは台帳の折り込みを開き、底の家名と三つ葉の切れ目を一つずつ照らした。",
            "「この刻印と足の形なら、うちの聖杯だ。どこから出たのか、荷をまとめた人に確かめてくれ」"
          ],
          "evidence": [
            "inventory_reverse",
            "cup_identified"
          ],
          "priority": 10
        },
        {
          "id": "orn-confirm-cup_identified",
          "person": "orn",
          "topic": "chalice",
          "selectedAll": [
            "cup_identified"
          ],
          "title": "確かめられた杯",
          "result": [
            "オルン：「刻印か割れ口を現物と確かめたのだな。教会の杯が見つかったことを記録しよう。誰がどう持ち出したかは、この品が出た荷をまとめた人に確かめてくれ」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "orn-confirm-cup_fracture",
          "person": "orn",
          "topic": "chalice",
          "selectedAll": [
            "cup_fracture"
          ],
          "title": "確かめられた杯",
          "result": [
            "オルン：「刻印か割れ口を現物と確かめたのだな。教会の杯が見つかったことを記録しよう。誰がどう持ち出したかは、この品が出た荷をまとめた人に確かめてくれ」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "theo-mill-visit_conflict",
          "person": "theo",
          "topic": "mill",
          "selectedAll": [
            "stop_match",
            "visit_conflict"
          ],
          "title": "取り付けたのは誰か",
          "result": [
            "木片の収まりと板の続き、訪問の話を示すと、テオはうつむいた。「俺が切って、あそこへ挟んだ。修理を支えるためじゃない。水門を下げてから木片を挟み、上げられなくして水車を止めた」",
            "「枠が傷んだように見えれば、新しい仕事を頼まれるかもしれないと思った。工賃で返済を少しでも進めたかった。頼まれる保証もないのに……」",
            "「戻り道でネリの『取水口を見てくれ』が聞こえた。ミラには何も言っていない。杯のことも知らなかった」。あなたは、本人が認めた取り付けと、現場で観察した木片の収まりを記録した。"
          ],
          "evidence": [
            "theo_admission"
          ],
          "priority": 100,
          "requires": [
            "sluice_block"
          ],
          "resolves": [
            "mill"
          ]
        },
        {
          "id": "theo-mill-theo_visit_revision",
          "person": "theo",
          "topic": "mill",
          "selectedAll": [
            "stop_match",
            "theo_visit_revision"
          ],
          "title": "取り付けたのは誰か",
          "result": [
            "木片の収まりと板の続き、訪問の話を示すと、テオはうつむいた。「俺が切って、あそこへ挟んだ。修理を支えるためじゃない。水門を下げてから木片を挟み、上げられなくして水車を止めた」",
            "「枠が傷んだように見えれば、新しい仕事を頼まれるかもしれないと思った。工賃で返済を少しでも進めたかった。頼まれる保証もないのに……」",
            "「戻り道でネリの『取水口を見てくれ』が聞こえた。ミラには何も言っていない。杯のことも知らなかった」。あなたは、本人が認めた取り付けと、現場で観察した木片の収まりを記録した。"
          ],
          "evidence": [
            "theo_admission"
          ],
          "priority": 100,
          "requires": [
            "sluice_block"
          ],
          "resolves": [
            "mill"
          ]
        },
        {
          "id": "theo-mill-neri_visit",
          "person": "theo",
          "topic": "mill",
          "selectedAll": [
            "stop_match",
            "neri_visit"
          ],
          "title": "取り付けたのは誰か",
          "result": [
            "木片の収まりと板の続き、訪問の話を示すと、テオはうつむいた。「俺が切って、あそこへ挟んだ。修理を支えるためじゃない。水門を下げてから木片を挟み、上げられなくして水車を止めた」",
            "「枠が傷んだように見えれば、新しい仕事を頼まれるかもしれないと思った。工賃で返済を少しでも進めたかった。頼まれる保証もないのに……」",
            "「戻り道でネリの『取水口を見てくれ』が聞こえた。ミラには何も言っていない。杯のことも知らなかった」。あなたは、本人が認めた取り付けと、現場で観察した木片の収まりを記録した。"
          ],
          "evidence": [
            "theo_admission"
          ],
          "priority": 100,
          "requires": [
            "sluice_block"
          ],
          "resolves": [
            "mill"
          ]
        },
        {
          "id": "theo-mill-alternative",
          "person": "theo",
          "topic": "mill",
          "selectedAll": [
            "stop_match",
            "mill_restored"
          ],
          "title": "取り付けたのは誰か",
          "result": [
            "木片の収まりと板の続き、訪問の話を示すと、テオはうつむいた。「俺が切って、あそこへ挟んだ。修理を支えるためじゃない。水門を下げてから木片を挟み、上げられなくして水車を止めた」",
            "「枠が傷んだように見えれば、新しい仕事を頼まれるかもしれないと思った。工賃で返済を少しでも進めたかった。頼まれる保証もないのに……」",
            "「戻り道でネリの『取水口を見てくれ』が聞こえた。ミラには何も言っていない。杯のことも知らなかった」。あなたは、本人が認めた取り付けと、現場で観察した木片の収まりを記録した。"
          ],
          "evidence": [
            "theo_admission"
          ],
          "priority": 100,
          "anyRequires": [
            "neri_visit",
            "visit_conflict",
            "theo_visit_revision"
          ],
          "resolves": [
            "mill"
          ]
        },
        {
          "id": "theo-made-block",
          "person": "theo",
          "topic": "mill",
          "selectedAll": [
            "stop_match"
          ],
          "title": "同じ板について",
          "result": [
            "テオ：「その材を削ったのは俺だ。でも、水車の木枠を直したことがある。作った物があるだけで、今朝誰が挟んだかまでは決まらないだろう」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "theo-seen-gate",
          "person": "theo",
          "topic": "mill",
          "selectedAll": [
            "neri_visit"
          ],
          "title": "取水口にいた理由",
          "result": [
            "テオ：「寸法棒を返しに行った。それは本当だ。ずっと工房と言ったのは嘘だった」",
            "「水車のことで呼び声がしたあとは工房に戻っていた。花車の声で窓を見た。灰色の外套と盆が教会へ入るところが見えたが、顔までは見ていない」"
          ],
          "evidence": [
            "theo_visit_revision",
            "theo_sighting"
          ],
          "priority": 10
        },
        {
          "id": "theo-mechanism",
          "person": "theo",
          "topic": "mill",
          "selectedAll": [
            "mill_restored"
          ],
          "title": "水が戻ったこと",
          "result": [
            "テオ：「木片が邪魔をしていたんだな。でも、誰が取り付けたかという話は残っている」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "neri-stop",
          "person": "neri",
          "topic": "mill",
          "selectedAll": [
            "removed_stop"
          ],
          "title": "木片の使い方",
          "result": [
            "ネリ：「作業の支えなら、上げた水門が落ちない位置へ入れる。これは下がったまま上がらなくする向きだった。こんな物を入れろとは頼んでいない」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "neri-match",
          "person": "neri",
          "topic": "mill",
          "selectedAll": [
            "stop_match"
          ],
          "title": "修理の材について",
          "result": [
            "ネリ：「一つ鐘のあと、取水口でテオと顔を合わせた。借りていた寸法棒を返しに来たと言っていたよ。名を呼んで挨拶した」",
            "「私は挽き台へ戻った。そのときはまだ水車が回っていた。その先、あの人が何をしたかまでは見ていない」"
          ],
          "evidence": [
            "neri_visit"
          ],
          "priority": 10
        },
        {
          "id": "theo-shared",
          "person": "theo",
          "topic": "personal",
          "selectedAll": [
            "mira_admission"
          ],
          "title": "ミラの持ち出しを聞いて",
          "result": [
            "テオ：「俺は杯のことを頼んでいない。ミラがそんなことをしていたなんて。自分の問題は、自分で何とかできると思っていた」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "mira-shared",
          "person": "mira",
          "topic": "personal",
          "selectedAll": [
            "theo_admission"
          ],
          "title": "水車のことを聞いて",
          "result": [
            "ミラ：「テオが……？　止まると知っていたわけじゃない。水車の声がしたとき、オルンが出ていくのが見えた。それで私は」"
          ],
          "evidence": [],
          "priority": 10
        },
        {
          "id": "theo-mill-direct-refit",
          "person": "theo",
          "topic": "mill",
          "selectedAll": [
            "removed_stop",
            "workshop_offcut"
          ],
          "title": "木片と板を示す",
          "result": [
            "木片の収まりと板の続き、訪問の話を示すと、テオはうつむいた。「俺が切って、あそこへ挟んだ。修理を支えるためじゃない。水門を下げてから木片を挟み、上げられなくして水車を止めた」",
            "「枠が傷んだように見えれば、新しい仕事を頼まれるかもしれないと思った。工賃で返済を少しでも進めたかった。頼まれる保証もないのに……」",
            "「戻り道でネリの『取水口を見てくれ』が聞こえた。ミラには何も言っていない。杯のことも知らなかった」。あなたは、本人が認めた取り付けと、現場で観察した木片の収まりを記録した。"
          ],
          "evidence": [
            "stop_match",
            "theo_admission"
          ],
          "priority": 100,
          "requires": [
            "sluice_block"
          ],
          "anyRequires": [
            "neri_visit",
            "visit_conflict",
            "theo_visit_revision"
          ],
          "resolves": [
            "mill"
          ]
        }
      ],
      "endingSegments": [
        {
          "resolved": "chalice",
          "text": "回収した銀器の形と刻印、または祭壇の薄片とのつながりを確かめた。ミラは、自分が教会から持ち出し、自分の荷に包んだ杯だと認めた。現物の識別と、本人の説明がそろった。"
        },
        {
          "resolved": "mill",
          "text": "木片の収まりと、工房の板から続く裂け目を確かめた。テオは、自分が材を削って挟み、修理仕事を頼まれる機会を作ろうとしたと認めた。職人の材があっただけで決めたのではなく、取り付けの行為を本人に確かめた。"
        },
        {
          "requires": [
            "mira_motive"
          ],
          "resolved": "chalice",
          "text": "ミラは銀を売り、テオの借金を本人に知らせず返そうとしていたと話した。以前、窯棚を救ってくれた相手を助けたかったのだという。売却や支払いはまだ行われていなかった。"
        },
        {
          "requires": [
            "orn_revision"
          ],
          "text": "オルンが二つ鐘に見たのは白布の輪郭だった。空でも形の変わらない枠を、杯の存在と取り違えていた。横戸の留め忘れも、本人が認めた。"
        },
        {
          "requires": [
            "theo_identity"
          ],
          "text": "テオは外套と盆の持ち主を、顔を見ていない後ろ姿の人物だと決めつけていた。借り手の話を示すと、その人違いを訂正した。"
        },
        {
          "requires": [
            "sera_memorial"
          ],
          "text": "セラは亡くした父をひそかに弔っていた。訪問を隠した理由は、窃盗とは別にあった。あなたは本人が人目を避けて話した事情として記録した。"
        },
        {
          "requires": [
            "shared_sequence"
          ],
          "text": "水車の停止が呼び声を生み、世話役が教会を離れた。その機会をミラが利用した。水車の停止と教会からの持ち出しが、同じ朝の呼び声を通してつながっていた。"
        },
        {
          "requires": [
            "mill_restored"
          ],
          "resolved": "mill",
          "text": "木片を取り出してからネリと水門を上げると、水車に水が戻った。部品を交換せずに動き出したことも、実際に確かめた。"
        },
        {
          "requires": [
            "mira_motive",
            "theo_admission"
          ],
          "text": "ミラは借金を返そうとして杯を持ち出し、テオは返済のための仕事を得ようとして水車を止めたと、それぞれ話した。ミラは停止を知らなかったと言い、テオも知らせなかったと述べた。二人の説明では、相談して分担した行動ではなかった。"
        },
        {
          "text": "調査記録には、確かめたところまでを書いた。まだ聞いていないことや、調べていない場所には、引き続き戻れる。"
        }
      ],
      "requiredFlags": [],
      "requiredEvidence": [],
      "clauses": [],
      "deductions": [],
      "events": [],
      "initialOrder": [],
      "order": [],
      "hints": [
        [
          "調べる順番は自由",
          "場所を開いただけでは発見になりません。対象のどこを見るか、何を動かすかを選びます。手帳の二つの資料を選んで比べることもできます。"
        ],
        [
          "見えている形の内側",
          "白布や板の覆いの下を、自分で確かめられます。見た形だけで中身や故障を決めず、何が何を支えているかを見てみよう。"
        ],
        [
          "似たものと、続いているもの",
          "色や職業だけでは持ち主は決まりません。割れ口、木目、線など、境を越えて続く部分を、別々に見つけた現物で比較してみよう。"
        ],
        [
          "言葉を現物に戻す",
          "杯は「触れた」と「持ち出した」を分ける。箱の敷き布には折り返しがある。水車では、木片が何を止めていたかと、誰がその朝そこへ来たかを別々に確かめる。"
        ],
        [
          "二つの結論へ",
          "ミラの箱から出た杯を台帳か祭壇の薄片で識別し、本人へ示す。水車では木片と工房の板の続きを確かめ、水が戻った仕組みとテオの訪問を示して本人に取り付けを問う。借金やセラの私的な用事を全て解かなくても、それぞれを問いただせる。"
        ]
      ],
      "ending": {
        "lead": "確かめた現物と、本人が言い直したことを記録する。",
        "paragraphs": []
      },
      "fallbackResponses": {
        "mira": {
          "morning": "ミラ：「花配りのことかしら、それとも戻ってからの仕事？　どちらでも、確かめたいことを示して」",
          "chalice": "ミラ：「教会へ花を届けたのは本当。でも、訪ねたことだけで持ち出したとは言えないでしょう。どの品や言葉のことを聞いているの？」",
          "mill": "ミラ：「粉が届かなくて困っているわ。取水口の仕組みなら、ネリの方がよく知っている」",
          "personal": "ミラ：「何について話したいの？」"
        },
        "theo": {
          "morning": "テオ：「俺の説明の、どの部分が気になった？」",
          "chalice": "テオ：「俺に借金があることと、杯がなくなったことは同じじゃない。見たことについてなら話すよ」",
          "mill": "テオ：「水車小屋の木枠を直したことはある。でも止まった理由は、現物を見ないと分からないだろう」",
          "personal": "テオ：「人前じゃ話しづらいことなら、ここで聞くよ」"
        },
        "sera": {
          "morning": "セラ：「道具の貸し借りか、誰かの説明かしら。どこが気になったの？」",
          "chalice": "セラ：「私の外套や盆があるからといって、今朝それを持っていた人まで決まるの？」",
          "mill": "セラ：「水車から呼ぶ声は聞いた。でも覆いの中で何が起きたかは見ていない」",
          "personal": "セラ：「急に何の話？　何か心当たりを尋ねたいものがあるのなら見せて」"
        },
        "orn": {
          "morning": "オルン：「私が何を確かめたか、気になる所があれば示してくれ」",
          "chalice": "オルン：「布の形は見たつもりだ。祭壇を実際に調べたら、私の見方と比べてくれ」",
          "mill": "オルン：「ネリに呼ばれて教会を出たが、水車の操作は任せている。壊れた所を見たわけではない」",
          "personal": "オルン：「何を聞きたいのかね」"
        },
        "neri": {
          "morning": "ネリ：「水車が止まった前後か、人の出入りか、どちらのことを聞きたい？」",
          "chalice": "ネリ：「聖杯は見ていないよ。教会からオルンを呼んだのは私だけれど」",
          "mill": "ネリ：「止まったことだけでは、故障か、何かが挟まったのかも分からない。取水口の覆いを開けて確かめてくれ」",
          "personal": "ネリ：「仕事のことで気になることでも？」"
        }
      },
      "initialObjectStates": {
        "altarCover": "down",
        "chest": "closed",
        "lining": "down",
        "package": "wrapped",
        "sluiceCover": "closed",
        "sluiceBlock": "seated",
        "sluiceGate": "lowered"
      }
    },
    "future": {
      "id": "future",
      "number": "02",
      "era": "代理が話す近未来",
      "title": "応答する空席",
      "accent": "teal",
      "scene": "assets/future.svg",
      "intro": "市民資料館の原本ディスクが、同じ重さの空ディスクにすり替えられた。資料を復旧するには、原本そのものを取り戻さなければならない。容疑者は三人。その一人は、事件のさなかにも、自分の名前と声で部屋にいると応答していた。",
      "premise": "捜査記録：入退館した人を直接確かめ、現場の状況と照合した結果、容疑者は三人に絞られた。犯行は一人で行われており、共犯者、交換用のロボット、身元不明の入室者はいない。提示するログはすべて本物で、改ざんもない。",
      "objective": "それぞれの記録から、何が確かめられるかを整理しよう。現場でしかできない操作と、三人の居場所を照らし合わせる。",
      "suspects": [
        {
          "id": "io",
          "name": "遠藤 イオ",
          "role": "保存技師",
          "short": "技師室"
        },
        {
          "id": "nagi",
          "name": "黒瀬 ナギ",
          "role": "資料修復員",
          "short": "試験室"
        },
        {
          "id": "yun",
          "name": "三枝 ユン",
          "role": "展示担当",
          "short": "搬入口"
        }
      ],
      "categories": [
        {
          "id": "generated",
          "label": "内容の生成・再生",
          "sub": "文章が作られた、音声が再生された"
        },
        {
          "id": "device",
          "label": "機器の作動",
          "sub": "札の番号が照合された、トレイが動いた"
        },
        {
          "id": "body",
          "label": "本人を途切れず目撃",
          "sub": "本人だと確かめたうえで、途切れず見ていた"
        }
      ],
      "classification": {
        "f2": "generated",
        "f3": "generated",
        "f4": "device",
        "f5": "body",
        "f6": "body",
        "f7": "device"
      },
      "events": [
        {
          "id": "unlatch",
          "label": "両手で解除する",
          "symbol": "hands"
        },
        {
          "id": "latch",
          "label": "トレイを開いた位置で固定",
          "symbol": "tray"
        },
        {
          "id": "swap",
          "label": "原本を空ディスクと交換",
          "symbol": "disc"
        },
        {
          "id": "close",
          "label": "トレイを閉じる",
          "symbol": "door"
        }
      ],
      "initialOrder": [
        "swap",
        "close",
        "unlatch",
        "latch"
      ],
      "order": [
        "unlatch",
        "latch",
        "swap",
        "close"
      ],
      "traceMatches": [
        "io",
        "nagi"
      ],
      "culprit": "io",
      "mechanism": "proxy",
      "proofs": {
        "opportunity": [
          "f5",
          "f6"
        ],
        "trace": [
          "f8"
        ]
      },
      "mechanisms": [
        {
          "id": "proxy",
          "label": "代理AIに応答させたまま、本人が現場で手動交換する"
        },
        {
          "id": "fake",
          "label": "本人は技師室で応答し、入室ログだけを偽造する"
        },
        {
          "id": "remote",
          "label": "技師室からの遠隔命令でトレイを操作し、原本を交換する"
        }
      ],
      "evidence": [
        {
          "id": "f1",
          "title": "封印トレイの取扱票",
          "kind": "装置",
          "icon": "disc",
          "pos": [
            47,
            45
          ],
          "art": "mechanism",
          "summary": "両手が必要なのは、解除するとき",
          "body": [
            "取扱票：原本は手動トレイに収める。ネットワークにつながるのは読み出し端子のみ。開閉モーターや交換ロボットはなく、遠隔操作でディスクを出し入れすることはできない。",
            "操作手順：両手で左右の解除板を押すと、解除位置で留まる。手を離してトレイを引き出し、保守用の工具「サービスくさび」をラッチに差し、開いた位置で固定する。その後は両手を使ってディスクを交換し、くさびを抜いて閉じる。この手順なら一人で操作できる。",
            "現物確認：14:10の始業点検で、二人の係員が原本の刻印を見て、トレイを閉じて封をした。封が切れたのは14:12、次にトレイが閉じたのは14:18。開閉ログに欠落はなく、14:18から調査で開け直すまで、トレイは閉じたままだった。その再点検で、刻印のない空ディスクを確認した。封を壊さずに中身を取り出すことはできないため、交換は14:12〜14:18の間だ。",
            "模型の見方：表示しているのは、発見後に開けたトレイと、操作説明用のくさび・比較工具。今の開き方や無人の椅子が、事件の時刻や在席を示しているわけではない。",
            "捜査メモ：三人とも前日に、正当な点検でこの装置に触れている。古い工具跡だけで、今回操作した人物を決めることはできない。"
          ],
          "note": "捜査メモ：記録を残すだけでできることと、現場で手を動かさなければできないことを分けよう。",
          "action": "封印トレイと取扱票を調べる",
          "location": "archive",
          "requires": [],
          "requiresFlags": []
        },
        {
          "id": "f2",
          "title": "14:14の署名付き応答",
          "kind": "確認済みのログ",
          "icon": "message",
          "pos": [
            17,
            34
          ],
          "art": "agent",
          "summary": "イオのアカウントから「技師室にいます」",
          "body": [
            "監査ログ：14:14:02／イオのアカウント／「技師室にいます」。署名と時刻に偽りはない。この文面が作成され、相手に届いたことは確認できる。",
            "応答を作ったのは、代理AI「コモ」。参照したのは、前日に保存された在席文「技師室にいます」だった。現在地を調べるセンサーは接続されていない。",
            "委任設定：定時の問い合わせには、本人の承認操作を待たずに、保存された在席文を返す。イオが技師室にいても、別の場所にいても、同じように実行される。"
          ],
          "note": "捜査メモ：署名で確かめられるのは応答の出どころだ。書かれた現在地を、その場で確認した記録ではない。",
          "action": "署名付き応答の入力と委任設定を読む",
          "location": "engineer-office",
          "requires": [],
          "requiresFlags": []
        },
        {
          "id": "f3",
          "title": "14:16の声の記録",
          "kind": "確認済みのログ",
          "icon": "speaker",
          "pos": [
            25,
            50
          ],
          "art": "voice",
          "summary": "技師室から聞こえた、イオに似た声",
          "body": [
            "音声記録：14:16、技師室のスピーカーから「引き続き作業中です」という声が流れた。保存された音声も、再生の記録も本物だ。",
            "再生の設定：入力は室内のマイクではない。前日に登録された文を代理AIが音声合成し、14:16に予約再生する設定になっていた。",
            "捜査メモ：イオ本人の声を模した音声が流れたことは確かだ。ただし、本人がその部屋にいたか、いなかったかは、この記録だけでは分からない。"
          ],
          "note": "捜査メモ：本人の声に聞こえたことと、その場に本人がいたことは、別に確かめる必要がある。",
          "action": "音声の入力と予約再生設定を読む",
          "location": "engineer-office",
          "requires": [],
          "requiresFlags": []
        },
        {
          "id": "f4",
          "title": "14:11の入室札の照合",
          "kind": "確認済みのログ",
          "icon": "badge",
          "pos": [
            35,
            57
          ],
          "art": "badge",
          "summary": "端末が読み取ったのは、札の番号",
          "body": [
            "認証ログ：14:11:45、原本室側の認証端末がイオの入室札の番号を読み取り、有効な札だと判定した。この照合記録に改ざんはない。",
            "認証の仕様：入室札は持ち運べる。顔や指紋などによる生体照合は行っていない。このログに残るのは札の番号と照合の成立で、誰が持っていたか、どの戸口を通ったかは記録されない。",
            "現場の見方：端末は原本室側にある。模型の奥のガラス仕切りを、人が通れる裏扉だと考える必要はない。端末の記録と、人の移動経路は分けて調べる。"
          ],
          "note": "捜査メモ：本物の札が読まれた。それだけで、札の持ち主本人を見たことになるだろうか。",
          "action": "入室札端末の記録仕様を調べる",
          "location": "engineer-office",
          "requires": [],
          "requiresFlags": []
        },
        {
          "id": "f5",
          "title": "試験室の手動圧力検査",
          "kind": "連続した目撃",
          "icon": "hands",
          "pos": [
            84,
            36
          ],
          "art": "pressure",
          "summary": "ナギを直接目撃／14:11〜14:19",
          "body": [
            "試験員の証言：「14:11にナギさんの顔と両手を確認しました。それから14:19まで、向かいに座って、ずっと見ていました。ナギさんは二枚の手動圧力板を押し続けていて、交代も退出もしていません」",
            "検査の仕様：板に重りを載せると検査は止まる。ただし、ここで本人の居場所を確かめているのは、圧力の値だけではない。試験員が顔と身体を途切れず見ていたという証言がある。",
            "確認事項：試験室と原本室は別の部屋だ。代理応答の設定や入室札の有無によって、ナギ本人を直接見ていたという証言が変わるわけではない。"
          ],
          "note": "捜査メモ：見ていた時間は、ディスクが交換された時間帯の初めから終わりまでを含むだろうか。",
          "action": "試験員にナギの居場所を聞く",
          "location": "test-lab",
          "requires": [],
          "requiresFlags": []
        },
        {
          "id": "f6",
          "title": "搬入口の対面受領",
          "kind": "連続した目撃",
          "icon": "people",
          "pos": [
            84,
            69
          ],
          "art": "courier",
          "summary": "ユンを直接目撃／14:10〜14:20",
          "body": [
            "配達員と警備員の証言：「顔を合わせて、ユンさん本人だと確かめました。14:10から14:20まで、三人で長い展示布を広げて、裂け目を一緒に数えていたんです」",
            "二人の証言は一致している。その間、二人ともユン本人を途切れず見ており、退出も交代もなかった。受領票に署名が残っているだけ、という話ではない。",
            "確認事項：搬入口は原本室とは別の場所にある。ディスクの交換は、三人が布を調べている間に始まり、終わっている。"
          ],
          "note": "捜査メモ：署名の有無だけでなく、その場の人が何を見ていたかを確かめよう。",
          "action": "搬入口でユンを見ていた人に聞く",
          "location": "loading",
          "requires": [],
          "requiresFlags": []
        },
        {
          "id": "f7",
          "title": "トレイの機械記録",
          "kind": "確認済みのログ",
          "icon": "tray",
          "pos": [
            57,
            41
          ],
          "art": "sensor",
          "summary": "解除、固定、重さの変化、閉鎖",
          "body": [
            "装置ログ：封切れ 14:12 → 左右の解除板 14:13 → 開位置ラッチ 14:13 → 重さの変化 14:15 → 閉鎖 14:18。いずれも装置に取り付けられたセンサーの記録だ。",
            "交換の前後で、ディスクの重さは同じ。しかし途中には、いったん持ち上げて戻したときの重さの変化がある。記録された動きは、取扱票の手順と一致する。",
            "捜査メモ：装置は操作者の顔も、誰の手かも記録していない。操作が行われたことは分かるが、誰が行ったかは、ほかの証拠と照らす必要がある。"
          ],
          "note": "捜査メモ：誰かが現場で操作したことと、その人物が誰なのかは、別の問いだ。",
          "action": "トレイの機械ログを読む",
          "location": "archive",
          "requires": [],
          "requiresFlags": []
        },
        {
          "id": "f8",
          "title": "ラッチに残った工具片",
          "kind": "物証と比較",
          "icon": "tool",
          "pos": [
            57,
            60
          ],
          "art": "shim",
          "summary": "今回の操作で残った樹脂片は、誰の工具に合うか",
          "body": [
            "始業点検の記録：14:10、二人の係員がトレイを開いて原本を確かめた際、透明な受け皿を空にして戻している。その後はくさびなどの工具を使わずに閉じ、封をした。前日の点検の欠片は残っていない。",
            "発見後の確認：14:18の閉鎖後、調査のため開け直すと、受け皿に緑色の樹脂片が一つあった。再点検には金属の支えだけを使い、緑色のくさびには触れていない。ラッチには、この樹脂片と同じ材質の新しいこすれ跡がある。始業点検後から14:18の閉鎖まで、開位置で固定した記録は14:13の一度だけだった。",
            "工具との照合：材質と三角形の断面は、イオとナギが持つ共通型のサービスくさびに合う。ユンの工具は金属製の平たいへらで、材質も形も合わない。模型の手前の台にも、比較用の三つの工具を並べてある。",
            "捜査メモ：同じ型の工具を二人とも持っている。欠片だけでは一人を指せない。交換が行われた時間に、誰が現場へ来られたかを調べよう。"
          ],
          "note": "捜査メモ：工具の型が同じでも、誰の工具から欠けたのかまでは、まだ分からない。",
          "action": "受け皿の工具片を三人の工具と比べる",
          "location": "archive",
          "requires": [],
          "requiresFlags": []
        }
      ],
      "hints": [
        [
          "本物の記録から、何が分かる？",
          "応答文と音声が、何をもとに作られたかを読み返そう。送信や再生が行われたことは確かだ。そのとき、イオ本人の居場所も確かめられていただろうか。"
        ],
        [
          "本人を見ていたのは誰か",
          "札の番号や圧力の値だけで決めない。試験室と搬入口の証言には、顔を確かめたうえで、本人をずっと見ていた人がいる。"
        ],
        [
          "両手を離せるのはいつ？",
          "左右の解除板を押すには両手が要る。トレイを開いた位置で固定すれば、手を離してディスクを交換できる。閉じるのは最後だ。"
        ],
        [
          "工具の一致と、操作する機会",
          "樹脂片はイオとナギの工具に合う。交換が行われた14:12〜14:18の間、ナギはどこで、誰に見られていただろう。"
        ],
        [
          "結論に添える証拠",
          "人物はイオ。代理AIに応答させたまま、本人が現場で手動交換した。「機会を絞った根拠」には試験室と搬入口の証言を両方、「新しい痕跡の根拠」にはラッチに残った工具片を選ぶ。AIが応答したこと自体は、イオの不在を証明しない。"
        ]
      ],
      "ending": {
        "lead": "応答を返していたのはコモ。原本を動かしたのは、人の手だった。",
        "paragraphs": [
          "捜査の結論：14:12に封が切れてから、14:18にトレイが閉じるまでの間に、原本は交換された。この装置は遠隔操作では交換できない。誰かが両手で解除板を押し、開いた位置で固定してから手を離し、ディスクを交換して閉じた。",
          "ナギは試験室、ユンは搬入口。二人は交換の始まりから終わりまで、別の場所にいるところを直接見られていた。イオの応答、音声、入室札の記録はどれも本物だが、技師室に本人が居続けたことを示してはいない。",
          "新しい樹脂片に合うのは、イオとナギのくさびだ。ナギは試験室を離れていない。三人のうち、現場で操作する機会があり、工具片にも合うのはイオだけになる。札の照合は本物だが、それだけで本人や通った戸口を確定することはできない。",
          "事件後の記録：イオは定時応答の委任設定を動かしたまま、原本を持ち出した。指摘を受け、工具箱の二重底から原本が回収された。これは推理のあとの確認だ。隠し場所を知らなくても、提示された証拠から結論を出すことができる。",
          "手帳の結び：コモは設定どおりに文章を作り、合成音声を流していた。ログに偽りはなかった。しかし「誰が返した応答か」が確かでも、その文に書かれた居場所まで確かとは限らなかった。"
        ]
      },
      "locations": [
        {
          "id": "archive",
          "name": "原本室",
          "description": "封印トレイ、装置ログ、比較用の工具。",
          "evidenceIds": [
            "f1",
            "f7",
            "f8"
          ],
          "requiresFlags": [],
          "pos": [
            53,
            45
          ]
        },
        {
          "id": "engineer-office",
          "name": "技師室の端末",
          "description": "署名付きの応答、合成された声、入室札の照合。",
          "evidenceIds": [
            "f2",
            "f3",
            "f4"
          ],
          "requiresFlags": [],
          "pos": [
            25,
            44
          ]
        },
        {
          "id": "test-lab",
          "name": "試験室",
          "description": "手動圧力検査を担当した人に、本人の所在を聞く。",
          "evidenceIds": [
            "f5"
          ],
          "requiresFlags": [],
          "pos": [
            84,
            36
          ]
        },
        {
          "id": "loading",
          "name": "搬入口",
          "description": "搬出作業を見ていた人に、本人の所在を聞く。",
          "evidenceIds": [
            "f6"
          ],
          "requiresFlags": [],
          "pos": [
            84,
            69
          ]
        }
      ],
      "deductions": [
        {
          "id": "record_limits",
          "title": "本物のログは、何を確かめた？",
          "prompt": "署名・声・札の記録を、本人の所在と分けて読む。",
          "requires": [
            "f2",
            "f3",
            "f4"
          ],
          "requiresFlags": [],
          "clauses": [
            {
              "id": "response",
              "prompt": "署名付き応答と声から、直接確かめられることは？",
              "options": [
                {
                  "id": "present",
                  "text": "イオ本人が、ずっと技師室にいた"
                },
                {
                  "id": "absent",
                  "text": "イオ本人が、必ず技師室を離れていた"
                },
                {
                  "id": "generated",
                  "text": "代理AIが文章を生成し、予約された合成音声が流れた"
                }
              ],
              "answer": "generated"
            },
            {
              "id": "badge",
              "prompt": "入室札のログが確かめたのは？",
              "options": [
                {
                  "id": "number",
                  "text": "持ち運べる札の番号が有効だったこと"
                },
                {
                  "id": "face",
                  "text": "札の持ち主の顔と身体が通ったこと"
                },
                {
                  "id": "route",
                  "text": "イオが奥のガラスを抜けて入ったこと"
                }
              ],
              "answer": "number"
            }
          ],
          "unlocksFlag": "future_record_limits",
          "successText": "ログは本物でも、本人の居場所まで観測した記録とは限らない。現場の操作と、本人への直接の目撃を照合しよう。"
        },
        {
          "id": "manual_exchange",
          "title": "交換には、どんな人の操作が要る？",
          "prompt": "装置の取扱票と実際の機械記録をつなぐ。",
          "requires": [
            "f1",
            "f7"
          ],
          "requiresFlags": [
            "future_record_limits"
          ],
          "clauses": [
            {
              "id": "operation",
              "prompt": "一人で交換する操作順は？",
              "options": [
                {
                  "id": "hands_free",
                  "text": "両手で解除 → 開位置で固定 → 手を離して交換 → 閉じる"
                },
                {
                  "id": "remote",
                  "text": "遠隔で開く → 代理AIが交換 → 自動で閉じる"
                },
                {
                  "id": "hold",
                  "text": "左右の解除板を押し続けたまま、別人が交換する"
                }
              ],
              "answer": "hands_free"
            },
            {
              "id": "time",
              "prompt": "今回の交換が起きた間は？",
              "options": [
                {
                  "id": "prior",
                  "text": "前日の正当な点検中"
                },
                {
                  "id": "window",
                  "text": "14:12の封切れから、14:18の閉鎖まで"
                },
                {
                  "id": "recheck",
                  "text": "14:18のあと、調査で再点検したとき"
                }
              ],
              "answer": "window"
            }
          ],
          "unlocksFlag": "future_manual_exchange",
          "successText": "交換は14:12〜14:18の現場での手作業だった。この間の所在と、今回残った工具片を重ねて判断する。"
        }
      ],
      "requiredFlags": [
        "future_record_limits",
        "future_manual_exchange"
      ],
      "requiredEvidence": [
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8"
      ],
      "clauses": [
        {
          "id": "culprit",
          "prompt": "原本を交換した人物は？",
          "options": [
            {
              "id": "io",
              "text": "遠藤 イオ"
            },
            {
              "id": "nagi",
              "text": "黒瀬 ナギ"
            },
            {
              "id": "yun",
              "text": "三枝 ユン"
            }
          ],
          "answer": "io"
        },
        {
          "id": "mechanism",
          "prompt": "どのように原本を交換した？",
          "options": [
            {
              "id": "proxy",
              "text": "代理AIに応答させたまま、本人が現場で手動交換する"
            },
            {
              "id": "fake",
              "text": "本人は技師室で応答し、入室ログだけを偽造する"
            },
            {
              "id": "remote",
              "text": "技師室からの遠隔命令でトレイを操作し、原本を交換する"
            }
          ],
          "answer": "proxy"
        },
        {
          "id": "opportunity",
          "prompt": "ナギとユンを現場の操作から外す根拠は？",
          "options": [
            {
              "id": "records",
              "text": "二人のアカウントから返信があったこと"
            },
            {
              "id": "body",
              "text": "交換の間を含め、別室で本人を途切れず直接見ていた証言"
            },
            {
              "id": "badge",
              "text": "イオの入室札だけが記録されたこと"
            }
          ],
          "answer": "body"
        },
        {
          "id": "trace",
          "prompt": "今回残った樹脂片だけで分かる範囲は？",
          "options": [
            {
              "id": "only_io",
              "text": "イオ本人の工具だと一意に決まる"
            },
            {
              "id": "io_nagi",
              "text": "イオとナギの共通型のくさびに合い、二人の所在との照合が必要"
            },
            {
              "id": "all",
              "text": "ユンの金属製のへらを含め、三人の工具に合う"
            }
          ],
          "answer": "io_nagi"
        },
        {
          "id": "meaning",
          "prompt": "代理AIの応答をどう結論に使う？",
          "options": [
            {
              "id": "not_location",
              "text": "生成・再生は本物だが、イオ本人の在席も不在も単独では証明しない"
            },
            {
              "id": "absence",
              "text": "AIが応答したので、イオ本人の不在が証明される"
            },
            {
              "id": "fake",
              "text": "イオを疑うには署名ログの偽造が必要になる"
            }
          ],
          "answer": "not_location"
        }
      ]
    }
  },
  "caseIds": [
    "village",
    "future"
  ],
  "version": 4
};if(typeof module!=='undefined'&&module.exports)module.exports=data;root.MysteryData=data;})(typeof globalThis!=='undefined'?globalThis:this);
