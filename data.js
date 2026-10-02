(function(root){'use strict';const data={
  "title": "記録と足跡",
  "subtitle": "人の言葉と、物の動き。",
  "cases": {
    "village": {
      "id": "village",
      "number": "01",
      "era": "収穫祭を前にした村",
      "title": "収穫祭の朝",
      "accent": "rust",
      "scene": "assets/village.svg",
      "interactionVersion": 4,
      "intro": "祭りの朝、水車が止まり、教会の銀の聖杯が消えた。あなたは里帰りした書記見習いだ。",
      "premise": "五人は、仕事場と祭りの荷の点検に同意している。",
      "objective": "村の調査",
      "opening": [
        {
          "id": "arrival",
          "speaker": "あなた",
          "text": "書記の手伝いを始めて、初めての里帰りだ。"
        },
        {
          "id": "church",
          "speaker": "オルン",
          "text": "水車が止まって、教会の銀の杯もない。二つ鐘にはあったはずだが……。"
        },
        {
          "id": "friend",
          "speaker": "テオ",
          "text": "借金は片づいたよ。一つ鐘から二つ鐘まで、セラとここで飾りを結んでいた。"
        },
        {
          "id": "caretaker",
          "speaker": "オルン",
          "text": "仕事場と祭りの荷は、皆が調べてよいと言っている。"
        }
      ],
      "suspects": [
        {
          "id": "mira",
          "name": "ミラ",
          "role": "パン焼き職人",
          "short": "窯場",
          "description": "祭りの白花を教会へ届けた。"
        },
        {
          "id": "theo",
          "name": "テオ",
          "role": "木工職人",
          "short": "工房",
          "description": "あなたの幼なじみ。"
        },
        {
          "id": "sera",
          "name": "セラ",
          "role": "染物職人",
          "short": "染場",
          "description": "村の染物職人。"
        },
        {
          "id": "orn",
          "name": "オルン",
          "role": "教会の世話役",
          "short": "教会",
          "description": "祭りの準備と教会の戸締まりを担う。"
        },
        {
          "id": "neri",
          "name": "ネリ",
          "role": "粉挽き職人",
          "short": "水車小屋",
          "description": "祭り用の粉を挽いている。"
        }
      ],
      "locations": [
        {
          "id": "workshop",
          "name": "テオの工房",
          "description": "作業机、西窓、木材棚。",
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
          "description": "白布を掛けた祭壇と、壁際の帳面。",
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
          "description": "焼き台と冷まし棚。脇に運び箱がある。",
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
          "description": "水桶、染め束、干し台。",
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
          "description": "鐘楼の下に貼り紙がある。",
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
          "description": "荷車のある広場。",
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
          "description": "横戸の内側に、小さな棚がある。",
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
          "description": "粉挽きの小屋と水車。",
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
          "description": "本流と水路の分かれ目。水門の操作柄がある。",
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
          "label": "今朝のこと"
        },
        {
          "id": "chalice",
          "label": "聖杯のこと"
        },
        {
          "id": "mill",
          "label": "水車のこと"
        },
        {
          "id": "personal",
          "label": "二人で話す"
        }
      ],
      "evidence": [
        {
          "id": "theo_first",
          "title": "テオの話",
          "kind": "調査記録",
          "body": [
            "テオ：「借金は片づいた。札に『受領』とあるだろう」",
            "「一つ鐘から二つ鐘まで工房にいた。セラもずっと一緒だった。教会には行っていないはずだ」"
          ]
        },
        {
          "id": "loan_front",
          "title": "借用札の表",
          "kind": "調査記録",
          "body": [
            "「貸付 銀貨五枚／受領 木工職人テオ／返す日 収穫祭」。刻みが五本ある。"
          ]
        },
        {
          "id": "loan_back",
          "title": "借用札の裏と控え",
          "kind": "調査記録",
          "body": [
            "裏書き：「受領は元金を受けた印。返済時、貸し手が刻みを横線で消す」",
            "刻みに横線はない。控え：「残り五枚、祭りの日まで」。"
          ]
        },
        {
          "id": "loan_reading",
          "title": "札の表と裏",
          "kind": "調査記録",
          "body": [
            "表：「受領 木工職人テオ」。裏：「受領は元金を受けた印」。刻みは五本、横線なし。控え：「残り五枚」。"
          ]
        },
        {
          "id": "theo_debt",
          "title": "テオの借金の話",
          "kind": "調査記録",
          "body": [
            "テオ：「まだ五枚残ってる。心配されたくなくて、ごまかした」",
            "「ミラには昨日話した。金を工面してくれとは頼んでいない」"
          ],
          "supersedes": "theo_first"
        },
        {
          "id": "theo_sighting",
          "title": "テオが窓から見たもの",
          "kind": "調査記録",
          "body": [
            "テオ：「セラと一緒だったのは嘘だ。花車の『出るぞ』のころ、灰色の外套で浅い盆を持った人が教会の横戸へ入った。顔は見えなかった」",
            "「セラだと思った。疑われないように、ここにいたことにしたんだ」"
          ],
          "supersedes": "theo_first"
        },
        {
          "id": "window_view",
          "title": "工房の西窓",
          "kind": "調査記録",
          "body": [
            "窓の向こうに教会の横戸が見える。"
          ]
        },
        {
          "id": "theo_identity",
          "title": "テオの言い直し",
          "kind": "調査記録",
          "body": [
            "テオ：「ミラが借りていたのか。俺が見たのは外套と盆だ。顔は見ていない」"
          ],
          "supersedes": "theo_sighting"
        },
        {
          "id": "orn_first",
          "title": "オルンの話",
          "kind": "調査記録",
          "body": [
            "オルン：「二つ鐘に、正面の敷居から白布の形を見た。杯はあったはずだ」",
            "「水車から呼ばれて教会を離れた。戻ったときも、いつもの形だった」"
          ]
        },
        {
          "id": "cloth_frame",
          "title": "白布の下",
          "kind": "調査記録",
          "body": [
            "固定された木枠がある。内側の丸いくぼみは空だ。"
          ],
          "image": "assets/altar-uncovered.png",
          "imageAlt": "白布を上げた祭壇。木枠の内側に空のくぼみがある"
        },
        {
          "id": "cloth_outline",
          "title": "布を戻した祭壇",
          "kind": "調査記録",
          "body": [
            "敷居から見た白布の形は、上げる前と変わらない。"
          ],
          "image": "assets/altar-covered.png",
          "imageAlt": "厚い白布を掛けた祭壇"
        },
        {
          "id": "orn_revision",
          "title": "オルンの言い直し",
          "kind": "調査記録",
          "body": [
            "オルン：「二つ鐘に布は上げていない。最後に杯を見たのは、一つ鐘の前だ。青い縁に欠けはなかった」",
            "「『取水口を見てくれ』と呼ばれて出た。開けていた横戸の留め金を戻し忘れた」"
          ],
          "supersedes": "orn_first"
        },
        {
          "id": "side_latch",
          "title": "横戸の留め金",
          "kind": "調査記録",
          "body": [
            "外から押すと開いた。内側の留め金は外れている。戸と金具に傷はない。"
          ]
        },
        {
          "id": "altar_chip",
          "title": "祭壇の青い薄片",
          "kind": "調査記録",
          "body": [
            "くぼみの奥に青い七宝の薄片が一つ。割れ口は二度曲がり、表面に細い白い筋がある。"
          ]
        },
        {
          "id": "inventory_front",
          "title": "祭礼具の台帳",
          "kind": "調査記録",
          "body": [
            "銀の聖杯の図。足の周囲は青い七宝で、一か所に白い筋が描かれている。"
          ]
        },
        {
          "id": "inventory_reverse",
          "title": "台帳の折り込み",
          "kind": "調査記録",
          "body": [
            "聖杯の底の実寸図。輪郭の一か所が平らだ。刻印の写し：「寄進 ロエン家／三つ葉、右の葉に切れ目」。"
          ]
        },
        {
          "id": "mira_first",
          "title": "ミラの花配り",
          "kind": "調査記録",
          "body": [
            "ミラ：「セラに外套と花盆を借りたの。花車の『出るぞ』のころ、横戸から白花を届けたわ」",
            "「花は脇室の入口へ置いた。祭壇には近づいていない。盆には花だけよ。二つ鐘ごろ返したわ」"
          ]
        },
        {
          "id": "mira_packing",
          "title": "ミラの荷の話",
          "kind": "調査記録",
          "body": [
            "ミラ：「戻ってから、祭りの荷をまとめていたわ」"
          ]
        },
        {
          "id": "mira_relationship",
          "title": "窯棚の修理",
          "kind": "調査記録",
          "body": [
            "ミラ：「去年、崩れた窯棚をテオがただで直してくれたの。最近は仕事が減ったと言っていたわ」"
          ]
        },
        {
          "id": "tray_surface",
          "title": "花盆の底",
          "kind": "調査記録",
          "body": [
            "白い花の茎が円くつぶれている。円の一か所が短く平らで、そこから溝へ細い擦り傷が続く。"
          ]
        },
        {
          "id": "tray_chip",
          "title": "花盆の溝",
          "kind": "調査記録",
          "body": [
            "青い薄片が溝に挟まっている。割れ口は二度曲がり、表面に白い筋がある。溝のほかの部分には薄い紫色が残る。"
          ]
        },
        {
          "id": "chip_join",
          "title": "二つの薄片",
          "kind": "調査記録",
          "body": [
            "割れ口が合い、白い筋がつながった。"
          ],
          "image": "assets/enamel-shards-only.svg",
          "imageAlt": "青い二つの薄片。曲がった割れ口と白い筋がある"
        },
        {
          "id": "foot_comparison",
          "title": "押し跡と実寸図",
          "kind": "調査記録",
          "body": [
            "円の直径と、一か所の平らな部分が重なった。"
          ],
          "image": "assets/foot-comparison.svg",
          "imageAlt": "円の一か所が平らな二つの輪郭"
        },
        {
          "id": "sera_first",
          "title": "セラの話",
          "kind": "調査記録",
          "body": [
            "セラ：「朝は染場にいた。教会には行っていないわ。テオもそう言っていたでしょう」",
            "「外套と盆は、もう返ってきたわ」"
          ]
        },
        {
          "id": "tray_custody",
          "title": "花盆の貸し借り",
          "kind": "調査記録",
          "body": [
            "セラ：「水汲みの声のあと、盆を洗って溝をさらった。それからミラに外套と貸したの」",
            "「二つ鐘ごろ返ってきた。まだ洗い直していないわ」"
          ]
        },
        {
          "id": "knot_sample",
          "title": "染め束の結び",
          "kind": "調査記録",
          "body": [
            "輪が二重に重なり、端が内側へ通っている。色の違う束も同じ結びだ。"
          ]
        },
        {
          "id": "memorial_note",
          "title": "棚の札",
          "kind": "調査記録",
          "body": [
            "紫の布の内側に札がある。「父ロエンへ。言いすぎた日のことを、今も覚えています」",
            "結びは二重の輪で、端が内側へ通っている。蝋燭の根元の蝋は柔らかい。"
          ]
        },
        {
          "id": "knot_comparison",
          "title": "二つの結び",
          "kind": "調査記録",
          "body": [
            "輪の重なる順と、端を内へ通す形が同じだ。"
          ]
        },
        {
          "id": "sera_memorial",
          "title": "セラの訪問",
          "kind": "調査記録",
          "body": [
            "セラ：「父の札よ。仲直りしないまま死に別れた。もう弔わないと言った手前、皆に知られたくなかったの」",
            "「一つ鐘のあとに行ったわ。帰りに祭壇の布を直して、銀の杯と欠けのない青い縁を見た。そのとき井戸から『水が上がったよ』と聞こえた」"
          ],
          "supersedes": "sera_first"
        },
        {
          "id": "alibi_conflict",
          "title": "テオとセラの話",
          "kind": "調査記録",
          "body": [
            "テオ：「一つ鐘から二つ鐘まで、セラもずっと工房にいた」",
            "セラ：「朝は染場にいた」"
          ]
        },
        {
          "id": "mira_contact",
          "title": "ミラの言い直し",
          "kind": "調査記録",
          "body": [
            "ミラ：「……祭壇へ行ったわ。杯を盆に載せた」",
            "「戻って作った包みは、台の脇の箱に入れたわ」"
          ],
          "supersedes": "mira_first"
        },
        {
          "id": "chest_layers",
          "title": "運び箱の中",
          "kind": "調査記録",
          "body": [
            "パンの小包と、籾殻を敷いた布。布は片側が盛り上がり、折り返しに湿った白い花弁が一枚挟まっている。"
          ]
        },
        {
          "id": "wrapped_item",
          "title": "敷き布の内側",
          "kind": "調査記録",
          "body": [
            "白い布包みがある。重く、硬い縁と細いくびれを手に感じる。"
          ]
        },
        {
          "id": "found_cup",
          "title": "白い包みの銀器",
          "kind": "調査記録",
          "body": [
            "銀の杯。足の青い七宝に欠けがあり、白い筋が残る。底に「ロエン家」と三つ葉が刻まれ、右の葉に切れ目がある。"
          ]
        },
        {
          "id": "cup_identified",
          "title": "銀器と台帳",
          "kind": "調査記録",
          "body": [
            "家名、三つ葉の切れ目、足の輪郭が台帳の写しと合った。"
          ]
        },
        {
          "id": "cup_fracture",
          "title": "銀器と薄片",
          "kind": "調査記録",
          "body": [
            "祭壇の薄片が杯の欠けに収まり、白い筋がつながった。"
          ]
        },
        {
          "id": "mira_admission",
          "title": "ミラの話",
          "kind": "調査記録",
          "body": [
            "ミラ：「その杯は、私が教会から持ち帰って包んだものよ。花だけと言ったのは嘘」",
            "「水車の声でオルンが出ていったのを見た。誰にも止められないと思ったの」"
          ]
        },
        {
          "id": "mira_motive",
          "title": "ミラの話",
          "kind": "調査記録",
          "body": [
            "ミラ：「銀を売ってテオの借金を返すつもりだった。窯棚を救ってくれた人の工房を失いたくなかったの」",
            "「頼まれたわけじゃない。売り先もまだよ。水車が止まるとも知らなかったわ」"
          ]
        },
        {
          "id": "signals",
          "title": "村の合図",
          "kind": "調査記録",
          "body": [
            "貼り紙：「一つ鐘／井戸の水汲み／花車出発／二つ鐘」。",
            "広場の人：「今日は一つ鐘、『水が上がったよ』、『取水口を見てくれ』、『出るぞ』、二つ鐘。それから杯がないと騒ぎになった」"
          ]
        },
        {
          "id": "neri_first",
          "title": "ネリの話",
          "kind": "調査記録",
          "body": [
            "ネリ：「水が急に細くなった。取水口の柄も上がらない。覆いの中はまだ見ていない」",
            "「『取水口を見てくれ』と呼ぶと、教会からオルンが来た。花車の声はそのあとだよ」"
          ]
        },
        {
          "id": "neri_visit",
          "title": "取水口での挨拶",
          "kind": "調査記録",
          "body": [
            "ネリ：「一つ鐘のあと、取水口でテオと挨拶した。寸法棒を返しに来たと言っていた」",
            "「水車はまだ回っていたよ。私は挽き台へ戻った」"
          ]
        },
        {
          "id": "repair_work",
          "title": "水車小屋の仕事札",
          "kind": "調査記録",
          "body": [
            "先月の記録：「水路の木枠修理／職人テオ／工賃支払済」。",
            "ネリ：「今回は、まだ修理を頼んでいないよ」"
          ]
        },
        {
          "id": "water_flow",
          "title": "取水口の水",
          "kind": "調査記録",
          "body": [
            "本流は流れ、水車用の水路は細い。水門板は下がっている。柄を上げると、途中で止まる。"
          ]
        },
        {
          "id": "sluice_block",
          "title": "覆いの内側",
          "kind": "調査記録",
          "body": [
            "歯竿と横木の間に木片が挟まっている。柄を引くと、歯竿が木片に当たる。",
            "木片には段差があり、角と削り面が残る。二本の鉛筆線がある。"
          ]
        },
        {
          "id": "removed_stop",
          "title": "取り出した木片",
          "kind": "調査記録",
          "body": [
            "片面に段差。端は斜めに裂け、二本の鉛筆線が端で途切れている。木目の一筋が小さく曲がっている。"
          ]
        },
        {
          "id": "mill_restored",
          "title": "水門を上げたあと",
          "kind": "調査記録",
          "body": [
            "ネリと柄を上げると、水門板が上がった。水車用の水路へ水が流れ、水車が回り始めた。"
          ]
        },
        {
          "id": "workshop_offcut",
          "title": "木材棚の短い板",
          "kind": "調査記録",
          "body": [
            "短い板の端が斜めに裂け、二本の鉛筆線が途切れている。片面に段差を削った跡がある。"
          ]
        },
        {
          "id": "stop_match",
          "title": "木片と短い板",
          "kind": "調査記録",
          "body": [
            "裂け目が合い、曲がった木目と二本の鉛筆線がつながった。"
          ]
        },
        {
          "id": "visit_conflict",
          "title": "テオとネリの話",
          "kind": "調査記録",
          "body": [
            "テオ：「一つ鐘から二つ鐘まで工房にいた」",
            "ネリ：「一つ鐘のあと、取水口でテオと挨拶した」"
          ]
        },
        {
          "id": "theo_visit_revision",
          "title": "テオの取水口への訪問",
          "kind": "調査記録",
          "body": [
            "テオ：「寸法棒を返しに行った。ずっと工房にいたのは嘘だ」",
            "「花車の声のときは工房の窓から、灰色の外套と盆が横戸へ入るのを見た。顔は見ていない」"
          ],
          "supersedes": "theo_first"
        },
        {
          "id": "theo_admission",
          "title": "テオの話",
          "kind": "調査記録",
          "body": [
            "テオ：「俺が切った木片だ。水門を下げてから挟んで、上げられなくした」",
            "「修理の仕事が欲しかった。工賃で借金を返そうと思ったんだ」",
            "「帰り道でネリの呼び声が聞こえた。ミラには話していない。杯のことも知らなかった」"
          ]
        },
        {
          "id": "shared_sequence",
          "title": "二人の話",
          "kind": "調査記録",
          "body": [
            "テオ：「水門を下げて木片を挟んだ。帰り道でネリの呼び声を聞いた」",
            "ミラ：「水車の声でオルンが出ていったのを見て、杯を持ち出した」"
          ]
        }
      ],
      "objects": [
        {
          "id": "theo",
          "location": "workshop",
          "name": "テオ",
          "description": "作業台で紐を巻いている。",
          "actions": [
            "theo-morning",
            "theo-work"
          ]
        },
        {
          "id": "loan",
          "location": "workshop",
          "name": "木の札",
          "description": "机に木の札と控えがある。",
          "actions": [
            "loan-front",
            "loan-back"
          ]
        },
        {
          "id": "window",
          "location": "workshop",
          "name": "西の窓",
          "description": "外へ開いた西窓。",
          "actions": [
            "window-look",
            "window-sill"
          ]
        },
        {
          "id": "timbers",
          "location": "workshop",
          "name": "木材棚",
          "description": "長い材、短い板、寸法棒がある。",
          "actions": [
            "timbers-front",
            "timbers-short"
          ]
        },
        {
          "id": "orn",
          "location": "church",
          "name": "オルン",
          "description": "正面の敷居に立っている。",
          "actions": [
            "orn-last",
            "orn-cup"
          ]
        },
        {
          "id": "altar",
          "location": "church",
          "name": "白布を掛けた祭壇",
          "description": "厚い白布の下に膨らみがある。",
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
              "text": "木枠の内側に空のくぼみがある。",
              "image": "assets/altar-uncovered.png",
              "imageAlt": "白布を上げた祭壇。木枠の内側に空のくぼみがある"
            },
            {
              "requiresState": {
                "altarCover": "down"
              },
              "text": "祭壇に白布が掛かっている。",
              "image": "assets/altar-covered.png",
              "imageAlt": "厚い白布を掛けた祭壇"
            }
          ]
        },
        {
          "id": "inventory",
          "location": "church",
          "name": "壁際の帳面",
          "description": "壁際の紐綴じの帳面。",
          "actions": [
            "inventory-front",
            "inventory-fold"
          ]
        },
        {
          "id": "side-door",
          "location": "church",
          "name": "横戸",
          "description": "教会の横手にある戸。",
          "actions": [
            "door-latch"
          ]
        },
        {
          "id": "mira",
          "location": "bakery",
          "name": "ミラ",
          "description": "焼き台の脇にいる。",
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
          "description": "粉と紙のある台。",
          "actions": [
            "bakery-paper",
            "bakery-flour"
          ]
        },
        {
          "id": "bread-rack",
          "location": "bakery",
          "name": "冷まし棚",
          "description": "パンを並べた棚。",
          "actions": [
            "bread-count"
          ]
        },
        {
          "id": "delivery-chest",
          "location": "bakery",
          "name": "運び箱",
          "description": "ふたを載せた木箱。",
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
              "text": "パンの小包と敷き布がある。"
            },
            {
              "requiresState": {
                "lining": "lifted"
              },
              "text": "敷き布の下に白い包みがある。"
            },
            {
              "requiresState": {
                "package": "unwrapped"
              },
              "text": "包みは広げられ、銀器は台の上にある。"
            }
          ]
        },
        {
          "id": "sera",
          "location": "dye-yard",
          "name": "セラ",
          "description": "干し台のそばにいる。",
          "actions": [
            "sera-morning",
            "sera-loan"
          ]
        },
        {
          "id": "tray",
          "location": "dye-yard",
          "name": "浅い木の盆",
          "description": "洗い場の横に置かれた木の盆。",
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
          "description": "干し台に掛けられた灰色の外套。",
          "actions": [
            "cloak-lining"
          ]
        },
        {
          "id": "dye-knots",
          "location": "dye-yard",
          "name": "染め束",
          "description": "紐で留められた布の束。",
          "actions": [
            "knot-look"
          ]
        },
        {
          "id": "prayer-shelf",
          "location": "church-storage",
          "name": "小さな棚",
          "description": "蝋燭と紫の布。布の内側に紙の端が見える。",
          "actions": [
            "shelf-surface",
            "shelf-note"
          ]
        },
        {
          "id": "candle",
          "location": "church-storage",
          "name": "蝋燭",
          "description": "棚の端の短い蝋燭。",
          "actions": [
            "candle-base"
          ]
        },
        {
          "id": "bell-notice",
          "location": "bell-tower",
          "name": "合図の貼り紙",
          "description": "祭りの合図の貼り紙。",
          "actions": [
            "signals-read"
          ]
        },
        {
          "id": "home-notes",
          "location": "square",
          "name": "里帰りの手帳",
          "description": "里帰りの手帳。",
          "actions": [
            "home-read"
          ]
        },
        {
          "id": "neri",
          "location": "watermill",
          "name": "ネリ",
          "description": "小屋の前で粉袋を持っている。",
          "actions": [
            "neri-symptom",
            "neri-morning"
          ]
        },
        {
          "id": "mill-wheel",
          "location": "watermill",
          "name": "水車と水路",
          "description": "小屋へ軸が伸びる水車。",
          "actions": [
            "wheel-look"
          ]
        },
        {
          "id": "mill-board",
          "location": "watermill",
          "name": "仕事札",
          "description": "壁に掛けた仕事札。",
          "actions": [
            "repair-read"
          ]
        },
        {
          "id": "sluice",
          "location": "sluice",
          "name": "取水口の操作部",
          "description": "水門板と操作柄。根元に板の覆いがある。",
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
              "text": "覆いの下に歯竿と横木が見える。"
            },
            {
              "requiresState": {
                "sluiceBlock": "removed"
              },
              "text": "木片のあった所は空いている。水門板は下がっている。"
            },
            {
              "requiresState": {
                "sluiceGate": "raised"
              },
              "text": "水門板が上がり、水路に水が流れている。"
            }
          ]
        },
        {
          "id": "riverbank",
          "location": "sluice",
          "name": "水路の岸",
          "description": "水路の分かれ目に踏み石がある。",
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
            "テオ：「借金は片づいた。札に『受領』とあるだろう」",
            "「一つ鐘から二つ鐘まで工房にいた。セラもずっと一緒だった。教会には行っていないはずだ」"
          ],
          "evidence": [
            "theo_first"
          ],
          "title": "テオの話"
        },
        {
          "id": "theo-work",
          "object": "theo",
          "label": "最近の仕事を聞く",
          "result": [
            "テオ：「今は仕事が少ない。前には水車小屋の木枠も直したよ」"
          ],
          "evidence": []
        },
        {
          "id": "loan-front",
          "object": "loan",
          "label": "表を読む",
          "result": [
            "「貸付 銀貨五枚／受領 木工職人テオ／返す日 収穫祭」。刻みが五本ある。"
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
            "裏書き：「受領は元金を受けた印。返済時、貸し手が刻みを横線で消す」",
            "刻みに横線はない。控え：「残り五枚、祭りの日まで」。"
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
            "窓の向こうに教会の横戸が見える。"
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
            "木くずと乾いた塗料が付いている。"
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
            "短い板の端が斜めに裂け、二本の鉛筆線が途切れている。片面に段差を削った跡がある。"
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
            "オルン：「二つ鐘に、正面の敷居から白布の形を見た。杯はあったはずだ」",
            "「水車から呼ばれて教会を離れた。戻ったときも、いつもの形だった」"
          ],
          "evidence": [
            "orn_first"
          ],
          "title": "オルンの話"
        },
        {
          "id": "orn-cup",
          "object": "orn",
          "label": "杯の記録を尋ねる",
          "result": [
            "オルン：「祭礼具の図は、壁際の台帳にある」"
          ],
          "evidence": []
        },
        {
          "id": "altar-edge",
          "object": "altar",
          "label": "布の縁を見る",
          "result": [
            "厚く折り返されている。穴や透ける部分はない。"
          ],
          "evidence": []
        },
        {
          "id": "altar-lift",
          "object": "altar",
          "label": "白布を上げる",
          "result": [
            "固定された木枠がある。内側の丸いくぼみは空だ。"
          ],
          "evidence": [
            "cloth_frame"
          ],
          "setsState": {
            "altarCover": "up"
          },
          "image": "assets/altar-uncovered.png",
          "imageAlt": "白布を上げた祭壇。木枠の内側に空のくぼみがある",
          "title": "白布の下"
        },
        {
          "id": "altar-recess",
          "object": "altar",
          "label": "くぼみの奥を見る",
          "result": [
            "くぼみの奥に青い七宝の薄片が一つ。割れ口は二度曲がり、表面に細い白い筋がある。"
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
            "敷居から見た白布の形は、上げる前と変わらない。"
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
          "imageAlt": "厚い白布を掛けた祭壇",
          "title": "布を戻した祭壇"
        },
        {
          "id": "inventory-front",
          "object": "inventory",
          "label": "器のページを読む",
          "result": [
            "銀の聖杯の図。足の周囲は青い七宝で、一か所に白い筋が描かれている。"
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
            "聖杯の底の実寸図。輪郭の一か所が平らだ。刻印の写し：「寄進 ロエン家／三つ葉、右の葉に切れ目」。"
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
            "外から押すと開いた。内側の留め金は外れている。戸と金具に傷はない。"
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
            "ミラ：「セラに外套と花盆を借りたの。花車の『出るぞ』のころ、横戸から白花を届けたわ」",
            "「花は脇室の入口へ置いた。祭壇には近づいていない。盆には花だけよ。二つ鐘ごろ返したわ」"
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
            "ミラ：「戻ってから、祭りの荷をまとめていたわ」"
          ],
          "evidence": [
            "mira_packing"
          ],
          "title": "ミラの荷の話"
        },
        {
          "id": "mira-friend",
          "object": "mira",
          "label": "テオとの仕事を聞く",
          "result": [
            "ミラ：「去年、崩れた窯棚をテオがただで直してくれたの。最近は仕事が減ったと言っていたわ」"
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
            "ミラ：「銀を売ってテオの借金を返すつもりだった。窯棚を救ってくれた人の工房を失いたくなかったの」",
            "「頼まれたわけじゃない。売り先もまだよ。水車が止まるとも知らなかったわ」"
          ],
          "evidence": [
            "mira_motive"
          ],
          "requires": [
            "mira_admission"
          ],
          "title": "ミラの話"
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
            "パンの小包と、籾殻を敷いた布。布は片側が盛り上がり、折り返しに湿った白い花弁が一枚挟まっている。"
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
            "白い布包みがある。重く、硬い縁と細いくびれを手に感じる。"
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
            "銀の杯。足の青い七宝に欠けがあり、白い筋が残る。底に「ロエン家」と三つ葉が刻まれ、右の葉に切れ目がある。"
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
            "セラ：「朝は染場にいた。教会には行っていないわ。テオもそう言っていたでしょう」",
            "「外套と盆は、もう返ってきたわ」"
          ],
          "evidence": [
            "sera_first"
          ],
          "title": "セラの話"
        },
        {
          "id": "sera-loan",
          "object": "sera",
          "label": "道具の貸し借りを聞く",
          "result": [
            "セラ：「水汲みの声のあと、盆を洗って溝をさらった。それからミラに外套と貸したの」",
            "「二つ鐘ごろ返ってきた。まだ洗い直していないわ」"
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
            "白い花の茎が円くつぶれている。円の一か所が短く平らで、そこから溝へ細い擦り傷が続く。"
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
            "青い薄片が溝に挟まっている。割れ口は二度曲がり、表面に白い筋がある。溝のほかの部分には薄い紫色が残る。"
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
            "裏地に名札や家紋はない。袖口は擦り切れている。"
          ],
          "evidence": []
        },
        {
          "id": "knot-look",
          "object": "dye-knots",
          "label": "紐の通り方を見る",
          "result": [
            "輪が二重に重なり、端が内側へ通っている。色の違う束も同じ結びだ。"
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
            "紫の布の内側に札がある。「父ロエンへ。言いすぎた日のことを、今も覚えています」",
            "結びは二重の輪で、端が内側へ通っている。蝋燭の根元の蝋は柔らかい。"
          ],
          "evidence": [
            "memorial_note"
          ],
          "title": "棚の札"
        },
        {
          "id": "candle-base",
          "object": "candle",
          "label": "台座を見る",
          "result": [
            "蝋の滴が固まりかけている。"
          ],
          "evidence": []
        },
        {
          "id": "signals-read",
          "object": "bell-notice",
          "label": "今日聞こえた順番を聞き合わせる",
          "result": [
            "貼り紙：「一つ鐘／井戸の水汲み／花車出発／二つ鐘」。",
            "広場の人：「今日は一つ鐘、『水が上がったよ』、『取水口を見てくれ』、『出るぞ』、二つ鐘。それから杯がないと騒ぎになった」"
          ],
          "evidence": [
            "signals"
          ],
          "title": "村の合図"
        },
        {
          "id": "home-read",
          "object": "home-notes",
          "label": "人との関係を読み返す",
          "result": [
            "テオは幼なじみ。ミラはパン焼き職人、セラは染物職人、オルンは教会の世話役、ネリは粉挽き職人。"
          ],
          "evidence": []
        },
        {
          "id": "neri-symptom",
          "object": "neri",
          "label": "何が起きたか聞く",
          "result": [
            "ネリ：「水が急に細くなった。取水口の柄も上がらない。覆いの中はまだ見ていない」",
            "「『取水口を見てくれ』と呼ぶと、教会からオルンが来た。花車の声はそのあとだよ」"
          ],
          "evidence": [
            "neri_first"
          ],
          "title": "ネリの話"
        },
        {
          "id": "neri-morning",
          "object": "neri",
          "label": "今朝会った人を聞く",
          "result": [
            "ネリ：「一つ鐘のあと、取水口でテオと挨拶した。寸法棒を返しに来たと言っていた」",
            "「水車はまだ回っていたよ。私は挽き台へ戻った」"
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
            "羽根と軸に、折れや外れは見当たらない。"
          ],
          "evidence": []
        },
        {
          "id": "repair-read",
          "object": "mill-board",
          "label": "修理の札を読む",
          "result": [
            "先月の記録：「水路の木枠修理／職人テオ／工賃支払済」。",
            "ネリ：「今回は、まだ修理を頼んでいないよ」"
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
            "本流は流れ、水車用の水路は細い。水門板は下がっている。柄を上げると、途中で止まる。"
          ],
          "evidence": [
            "water_flow"
          ],
          "requiresState": {
            "sluiceGate": "lowered",
            "sluiceBlock": "seated"
          },
          "title": "取水口の水"
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
            "歯竿と横木の間に木片が挟まっている。柄を引くと、歯竿が木片に当たる。",
            "木片には段差があり、角と削り面が残る。二本の鉛筆線がある。"
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
            "片面に段差。端は斜めに裂け、二本の鉛筆線が端で途切れている。木目の一筋が小さく曲がっている。"
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
          "imageAlt": "歯竿と横木の間が空き、水門板は下がっている",
          "title": "取り出した木片"
        },
        {
          "id": "sluice-raise",
          "object": "sluice",
          "label": "ネリと操作柄を上げる",
          "result": [
            "ネリと柄を上げると、水門板が上がった。水車用の水路へ水が流れ、水車が回り始めた。"
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
          "imageAlt": "上がった水門板と、水の流れる水路",
          "title": "水門を上げたあと"
        },
        {
          "id": "bank-look",
          "object": "riverbank",
          "label": "踏み石を見る",
          "result": [
            "踏み石に泥の跡が重なっている。"
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
          "imageAlt": "上がった水門板と、水の流れる水路"
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
            "表：「受領 木工職人テオ」。裏：「受領は元金を受けた印」。刻みは五本、横線なし。控え：「残り五枚」。"
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
            "割れ口が合い、白い筋がつながった。"
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
            "円の直径と、一か所の平らな部分が重なった。"
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
            "輪の重なる順と、端を内へ通す形が同じだ。"
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
            "テオ：「一つ鐘から二つ鐘まで、セラもずっと工房にいた」",
            "セラ：「朝は染場にいた」"
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
            "家名、三つ葉の切れ目、足の輪郭が台帳の写しと合った。"
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
            "祭壇の薄片が杯の欠けに収まり、白い筋がつながった。"
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
            "裂け目が合い、曲がった木目と二本の鉛筆線がつながった。"
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
            "テオ：「一つ鐘から二つ鐘まで工房にいた」",
            "ネリ：「一つ鐘のあと、取水口でテオと挨拶した」"
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
            "テオ：「水門を下げて木片を挟んだ。帰り道でネリの呼び声を聞いた」",
            "ミラ：「水車の声でオルンが出ていったのを見て、杯を持ち出した」"
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
            "テオ：「まだ五枚残ってる。心配されたくなくて、ごまかした」",
            "「ミラには昨日話した。金を工面してくれとは頼んでいない」"
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
            "テオ：「まだ五枚残ってる。心配されたくなくて、ごまかした」",
            "「ミラには昨日話した。金を工面してくれとは頼んでいない」"
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
            "テオ：「セラと一緒だったのは嘘だ。花車の『出るぞ』のころ、灰色の外套で浅い盆を持った人が教会の横戸へ入った。顔は見えなかった」",
            "「セラだと思った。疑われないように、ここにいたことにしたんだ」"
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
            "テオ：「セラと一緒だったのは嘘だ。花車の『出るぞ』のころ、灰色の外套で浅い盆を持った人が教会の横戸へ入った。顔は見えなかった」",
            "「セラだと思った。疑われないように、ここにいたことにしたんだ」"
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
            "テオ：「寸法棒を返しに行った。ずっと工房にいたのは嘘だ」",
            "「花車の声のときは工房の窓から、灰色の外套と盆が横戸へ入るのを見た。顔は見ていない」"
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
            "テオ：「寸法棒を返しに行った。ずっと工房にいたのは嘘だ」",
            "「花車の声のときは工房の窓から、灰色の外套と盆が横戸へ入るのを見た。顔は見ていない」"
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
            "テオ：「ミラが借りていたのか。俺が見たのは外套と盆だ。顔は見ていない」"
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
            "オルン：「二つ鐘に布は上げていない。最後に杯を見たのは、一つ鐘の前だ。青い縁に欠けはなかった」",
            "「『取水口を見てくれ』と呼ばれて出た。開けていた横戸の留め金を戻し忘れた」"
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
            "オルン：「二つ鐘に布は上げていない。最後に杯を見たのは、一つ鐘の前だ。青い縁に欠けはなかった」",
            "「『取水口を見てくれ』と呼ばれて出た。開けていた横戸の留め金を戻し忘れた」"
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
            "セラ：「父の札よ。仲直りしないまま死に別れた。もう弔わないと言った手前、皆に知られたくなかったの」",
            "「一つ鐘のあとに行ったわ。帰りに祭壇の布を直して、銀の杯と欠けのない青い縁を見た。そのとき井戸から『水が上がったよ』と聞こえた」"
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
            "セラ：「父の札よ。仲直りしないまま死に別れた。もう弔わないと言った手前、皆に知られたくなかったの」",
            "「一つ鐘のあとに行ったわ。帰りに祭壇の布を直して、銀の杯と欠けのない青い縁を見た。そのとき井戸から『水が上がったよ』と聞こえた」"
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
            "セラ：「テオと工房にいたとは言っていないわ」"
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
            "セラ：「その札のことは、二人きりで話したいわ」"
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
            "ミラ：「……祭壇へ行ったわ。杯を盆に載せた」",
            "「戻って作った包みは、台の脇の箱に入れたわ」"
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
            "ミラ：「……祭壇へ行ったわ。杯を盆に載せた」",
            "「戻って作った包みは、台の脇の箱に入れたわ」"
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
            "ミラ：「……祭壇には行ったわ」"
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
            "ミラ：「その跡のことは、覚えていないわ」"
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
            "ミラ：「その杯は、私が教会から持ち帰って包んだものよ。花だけと言ったのは嘘」",
            "「水車の声でオルンが出ていったのを見た。誰にも止められないと思ったの」"
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
            "ミラ：「その杯は、私が教会から持ち帰って包んだものよ。花だけと言ったのは嘘」",
            "「水車の声でオルンが出ていったのを見た。誰にも止められないと思ったの」"
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
            "ミラ：「その杯は、私が教会から持ち帰って包んだものよ。花だけと言ったのは嘘」",
            "「水車の声でオルンが出ていったのを見た。誰にも止められないと思ったの」"
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
            "ミラ：「戻って白い包みを作り、運び箱へ入れたわ。箱はずっと台の脇よ。封はしていない」",
            "「荷は調べていいわ」"
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
            "ミラ：「その杯は、私が教会から持ち帰って包んだものよ。花だけと言ったのは嘘」",
            "「水車の声でオルンが出ていったのを見た。誰にも止められないと思ったの」"
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
            "オルンは台帳を開き、刻印と足の輪郭を見比べた。",
            "オルン：「家名も三つ葉の切れ目も合う。うちの聖杯だ」"
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
            "オルン：「うちの聖杯だ」"
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
            "オルン：「うちの聖杯だ」"
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
            "テオ：「俺が切った木片だ。水門を下げてから挟んで、上げられなくした」",
            "「修理の仕事が欲しかった。工賃で借金を返そうと思ったんだ」",
            "「帰り道でネリの呼び声が聞こえた。ミラには話していない。杯のことも知らなかった」"
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
            "テオ：「俺が切った木片だ。水門を下げてから挟んで、上げられなくした」",
            "「修理の仕事が欲しかった。工賃で借金を返そうと思ったんだ」",
            "「帰り道でネリの呼び声が聞こえた。ミラには話していない。杯のことも知らなかった」"
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
            "テオ：「俺が切った木片だ。水門を下げてから挟んで、上げられなくした」",
            "「修理の仕事が欲しかった。工賃で借金を返そうと思ったんだ」",
            "「帰り道でネリの呼び声が聞こえた。ミラには話していない。杯のことも知らなかった」"
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
            "テオ：「俺が切った木片だ。水門を下げてから挟んで、上げられなくした」",
            "「修理の仕事が欲しかった。工賃で借金を返そうと思ったんだ」",
            "「帰り道でネリの呼び声が聞こえた。ミラには話していない。杯のことも知らなかった」"
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
            "テオ：「俺が削った材だ。前に、水車小屋の木枠を直したことがある」"
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
            "テオ：「寸法棒を返しに行った。ずっと工房にいたのは嘘だ」",
            "「花車の声のときは工房の窓から、灰色の外套と盆が横戸へ入るのを見た。顔は見ていない」"
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
            "テオ：「水車が回ったのか」"
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
            "ネリ：「こんな物を入れてくれとは頼んでいないよ」"
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
            "ネリ：「一つ鐘のあと、取水口でテオと挨拶した。寸法棒を返しに来たと言っていた」",
            "「水車はまだ回っていたよ。私は挽き台へ戻った」"
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
            "テオ：「俺は杯のことを頼んでいない。ミラがそんなことを……」"
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
            "ミラ：「テオが……？　止まるとは知らなかったわ」"
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
            "テオ：「俺が切った木片だ。水門を下げてから挟んで、上げられなくした」",
            "「修理の仕事が欲しかった。工賃で借金を返そうと思ったんだ」",
            "「帰り道でネリの呼び声が聞こえた。ミラには話していない。杯のことも知らなかった」"
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
          "text": "銀の聖杯はミラの箱から見つかった。ミラは教会から持ち帰り、包んだと認めた。"
        },
        {
          "resolved": "mill",
          "text": "水門の木片は、テオの工房の板とつながった。テオは水門を下げて木片を挟み、修理の仕事を得ようとしたと認めた。"
        },
        {
          "requires": [
            "mira_motive"
          ],
          "resolved": "chalice",
          "text": "ミラは、テオの借金を返すために杯を売るつもりだったと話した。売却はまだだった。"
        },
        {
          "requires": [
            "orn_revision"
          ],
          "text": "オルンが二つ鐘に見たのは白布だった。最後に杯を見たのは一つ鐘の前だという。"
        },
        {
          "requires": [
            "theo_identity"
          ],
          "text": "テオは、窓から見た人の顔を確かめていなかったと話した。"
        },
        {
          "requires": [
            "sera_memorial"
          ],
          "text": "セラは父を弔うために教会を訪ねたと、二人きりで話した。"
        },
        {
          "requires": [
            "shared_sequence"
          ],
          "text": "水車の呼び声でオルンが教会を離れ、ミラはその間に杯を持ち出したと話した。"
        },
        {
          "requires": [
            "mill_restored"
          ],
          "resolved": "mill",
          "text": "木片を除いて水門を上げると、水車に水が戻った。"
        },
        {
          "requires": [
            "mira_motive",
            "theo_admission"
          ],
          "text": "ミラは借金を返そうとして杯を持ち出し、テオは工賃を得ようとして水車を止めた。それぞれ、相手の行動は知らなかったと話した。"
        },
        {
          "text": "記録はここまで。"
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
        "lead": "調査の記録",
        "paragraphs": []
      },
      "fallbackResponses": {
        "mira": {
          "morning": "ミラ：「何を聞きたいの？」",
          "chalice": "ミラ：「……何の話かしら」",
          "mill": "ミラ：「私には分からないわ」",
          "personal": "ミラ：「何の話？」"
        },
        "theo": {
          "morning": "テオ：「どの話だ？」",
          "chalice": "テオ：「俺が知っている話か？」",
          "mill": "テオ：「……何が言いたい？」",
          "personal": "テオ：「何の話だ？」"
        },
        "sera": {
          "morning": "セラ：「何を聞きたいの？」",
          "chalice": "セラ：「そのことは分からないわ」",
          "mill": "セラ：「水車のことは分からないわ」",
          "personal": "セラ：「何の話？」"
        },
        "orn": {
          "morning": "オルン：「どの話かね」",
          "chalice": "オルン：「何を聞きたいのかね」",
          "mill": "オルン：「詳しいことは分からん」",
          "personal": "オルン：「何かね」"
        },
        "neri": {
          "morning": "ネリ：「どの話だい？」",
          "chalice": "ネリ：「杯のことは分からないよ」",
          "mill": "ネリ：「何を聞きたいんだい？」",
          "personal": "ネリ：「何だい？」"
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
      "era": "市民資料館・午後",
      "title": "閉じていた記録",
      "accent": "teal",
      "scene": "assets/future.svg",
      "interactionVersion": 4,
      "intro": "保管トレイの中から、原本の大型録音盤が消えた。残っていたのは、録音されていない試験盤だった。",
      "premise": "大型の録音盤 A-17 は、この町の古い声を収めた原本だ。午後の点検写真には写っている。資料館の四人は、装置と作業用品の調査に同意した。",
      "objective": "原本の行方と、交換までの経緯を調べる。",
      "opening": [
        {
          "id": "arrival",
          "speaker": "ルイ",
          "text": "原本の代わりに、試験盤が入っていました。まだ返却便は出していません。"
        },
        {
          "id": "archive",
          "speaker": "ユン",
          "text": "14時14分には、トレイは閉じていました。盤も見た……と思います。"
        },
        {
          "id": "terminal",
          "speaker": "イオ",
          "text": "そのころなら、僕の端末にも返答が残っています。"
        }
      ],
      "suspects": [
        {
          "id": "io",
          "name": "遠藤 イオ",
          "role": "保存技師",
          "short": "端末",
          "description": "端末と保管装置を管理している。"
        },
        {
          "id": "nagi",
          "name": "黒瀬 ナギ",
          "role": "修復員",
          "short": "作業台",
          "description": "午後は読取器の清掃を担当していた。"
        },
        {
          "id": "yun",
          "name": "三枝 ユン",
          "role": "展示担当",
          "short": "保管室",
          "description": "展示品の搬出準備をしていた。"
        },
        {
          "id": "rui",
          "name": "真野 ルイ",
          "role": "受付係",
          "short": "搬出待ち",
          "description": "返却便の伝票を扱っている。"
        }
      ],
      "locations": [
        {
          "id": "archive",
          "name": "保管装置",
          "description": "手動のトレイと、横の表示器。",
          "anchor": "archive",
          "pos": [
            73.3,
            34.3
          ],
          "evidenceIds": [
            "tray_controls",
            "open_contact_one",
            "open_contact_zero",
            "open_contact_zero",
            "contact_label",
            "tab_off",
            "tab_off",
            "tab_on_open",
            "contact_log",
            "yun_first",
            "opaque_front"
          ]
        },
        {
          "id": "terminal",
          "name": "技師の机",
          "description": "端末、スピーカー、書類。",
          "anchor": "terminal",
          "pos": [
            27.8,
            39.9
          ],
          "evidenceIds": [
            "original_photo",
            "reply_output",
            "proxy_setting",
            "io_first",
            "old_return"
          ]
        },
        {
          "id": "cart",
          "name": "共用の返却台車",
          "description": "斜めの投入口と、下の引き出し。",
          "anchor": "cart",
          "pos": [
            74,
            72.1
          ],
          "evidenceIds": [
            "drawer_seal",
            "drawer_open",
            "recovered_disc",
            "chute_inside",
            "chute_test"
          ]
        },
        {
          "id": "bench",
          "name": "修復作業台",
          "description": "ナギの工具と、読取器。",
          "anchor": "bench",
          "pos": [
            36.2,
            75.1
          ],
          "evidenceIds": [
            "reader_log",
            "reader_face",
            "shared_tools",
            "nagi_first",
            "nagi_return"
          ]
        },
        {
          "id": "dispatch",
          "name": "搬出待ち",
          "description": "伝票を持ったルイがいる。",
          "anchor": "dispatch",
          "pos": [
            14.4,
            76.9
          ],
          "evidenceIds": [
            "dispatch_receipt",
            "rui_first",
            "rui_photo"
          ]
        }
      ],
      "initialObjectStates": {
        "tray": "closed",
        "tab": "contact",
        "drawer": "sealed",
        "disc": "inside",
        "chute": "untested"
      },
      "objects": [
        {
          "id": "tray",
          "location": "archive",
          "name": "トレイ",
          "description": "銀色の引き出し。左右に銅色の板。",
          "views": [
            {
              "requiresState": {
                "tray": "open",
                "tab": "contact"
              },
              "text": "トレイは引き出されている。",
              "image": "assets/future-v5/tray-open-one.svg",
              "imageAlt": "開いたトレイと表示1"
            },
            {
              "requiresState": {
                "tray": "open",
                "tab": "held"
              },
              "text": "トレイは引き出されている。",
              "image": "assets/future-v5/tray-open-zero.svg",
              "imageAlt": "開いたトレイ、外された札、表示0"
            },
            {
              "requiresState": {
                "tray": "open",
                "tab": "home"
              },
              "text": "トレイは引き出されている。",
              "image": "assets/future-v5/contact-home-open.svg",
              "imageAlt": "開いたトレイの前板にはめた札と表示0"
            }
          ]
        },
        {
          "id": "contact",
          "location": "archive",
          "name": "表示器",
          "description": "緑のランプ。縁に、小さな銀色の札が貼りついている。",
          "views": [
            {
              "requiresState": {
                "tab": "held"
              },
              "text": "表示は0。銀色の札は外してある。"
            },
            {
              "requiresState": {
                "tab": "home",
                "tray": "open"
              },
              "text": "表示は0。銀色の札はトレイの前板にはまっている。",
              "image": "assets/future-v5/contact-home-open.svg",
              "imageAlt": "表示は0。銀色の札はトレイの前板にはまっている。"
            },
            {
              "requiresState": {
                "tab": "home",
                "tray": "closed"
              },
              "text": "表示は1。銀色の札はトレイの前板にはまっている。",
              "image": "assets/future-v5/contact-home-closed.svg",
              "imageAlt": "表示は1。銀色の札はトレイの前板にはまっている。"
            },
            {
              "requiresState": {
                "tab": "home",
                "tray": "released"
              },
              "text": "表示は1。銀色の札はトレイの前板にはまっている。",
              "image": "assets/future-v5/contact-home-closed.svg",
              "imageAlt": "表示は1。銀色の札はトレイの前板にはまっている。"
            }
          ]
        },
        {
          "id": "device-log",
          "location": "archive",
          "name": "機器記録",
          "description": "表示器の脇に、小さな端子。",
          "views": []
        },
        {
          "id": "yun",
          "location": "archive",
          "name": "ユン",
          "description": "黄色い上着の展示担当。",
          "views": []
        },
        {
          "id": "proxy",
          "location": "terminal",
          "name": "端末",
          "description": "机上の画面に、14:12の送信履歴。",
          "views": []
        },
        {
          "id": "photo",
          "location": "terminal",
          "name": "点検写真",
          "description": "机に置かれた点検用の端末。",
          "views": []
        },
        {
          "id": "io",
          "location": "terminal",
          "name": "イオ",
          "description": "紺色の作業着の技師。",
          "views": []
        },
        {
          "id": "return-slip",
          "location": "terminal",
          "name": "返却控え",
          "description": "机のトレイに、一枚の控え。",
          "views": []
        },
        {
          "id": "chute",
          "location": "cart",
          "name": "投入口",
          "description": "斜めの金属板。下に細い口がある。",
          "views": []
        },
        {
          "id": "drawer",
          "location": "cart",
          "name": "返却引き出し",
          "description": "白い帯が縦横に掛かっている。",
          "views": [
            {
              "requiresState": {
                "drawer": "open",
                "disc": "inside"
              },
              "text": "浅い引き出しに、銀色の盤が一枚ある。",
              "image": "assets/future-v5/drawer-open.svg",
              "imageAlt": "浅い引き出しと一枚の銀色の盤"
            },
            {
              "requiresState": {
                "drawer": "open",
                "disc": "removed",
                "chute": "untested"
              },
              "text": "盤を取り出した引き出し。金属の底が見える。",
              "image": "assets/future-v5/drawer-empty.svg",
              "imageAlt": "空の浅い引き出し"
            },
            {
              "requiresState": {
                "drawer": "closed"
              },
              "text": "帯を外した引き出しは、奥まで戻っている。"
            },
            {
              "requiresState": {
                "drawer": "open",
                "chute": "tested"
              },
              "text": "丸いくぼみに、黄色い縁の盤がある。",
              "image": "assets/future-v5/chute-test.svg",
              "imageAlt": "開いた引き出しの丸いくぼみに黄色い縁の盤"
            }
          ]
        },
        {
          "id": "test-disc",
          "location": "cart",
          "name": "試験盤",
          "description": "側面のホルダーに、黄色い縁の試験盤が二枚ある。",
          "views": [
            {
              "requiresState": {
                "chute": "tested"
              },
              "text": "ホルダーに残っているのは一枚。"
            },
            {
              "requiresState": {
                "chute": "blocked"
              },
              "text": "ホルダーは空。投入口から盤の縁が出ている。"
            }
          ]
        },
        {
          "id": "reader",
          "location": "bench",
          "name": "札の読取器",
          "description": "保管室側へ向いた、小さな黒い面。",
          "views": []
        },
        {
          "id": "tools",
          "location": "bench",
          "name": "工具",
          "description": "緑色のくさびが二本。金属のへら。",
          "views": []
        },
        {
          "id": "nagi",
          "location": "bench",
          "name": "ナギ",
          "description": "灰色の修復着。手首に青い布を巻いている。",
          "views": []
        },
        {
          "id": "receipt",
          "location": "dispatch",
          "name": "搬出伝票",
          "description": "クリップに留められた伝票。",
          "views": []
        },
        {
          "id": "rui",
          "location": "dispatch",
          "name": "ルイ",
          "description": "赤茶色の上着。返却便の受付係。",
          "views": []
        }
      ],
      "actions": [
        {
          "id": "photo-view",
          "object": "photo",
          "label": "開く",
          "title": "点検写真",
          "result": [
            "14:03:18　端末 R-2"
          ],
          "evidence": [
            "original_photo"
          ],
          "image": "assets/future-v5/original-photo.svg",
          "imageAlt": "開いた保管トレイ。盤の縁に A-17"
        },
        {
          "id": "tray-release",
          "object": "tray",
          "label": "押す",
          "title": "トレイ",
          "result": [
            "左右の爪が引っ込んだ。"
          ],
          "evidence": [
            "tray_controls"
          ],
          "requiresState": {
            "tray": "closed"
          },
          "setsState": {
            "tray": "released"
          }
        },
        {
          "id": "tray-pull-contact",
          "object": "tray",
          "label": "引く",
          "title": "トレイ",
          "result": [
            "トレイ：開　／　表示：1"
          ],
          "evidence": [
            "open_contact_one"
          ],
          "requiresState": {
            "tray": "released",
            "tab": "contact"
          },
          "setsState": {
            "tray": "open"
          },
          "image": "assets/future-v5/tray-open-one.svg",
          "imageAlt": "開いたトレイと表示 1"
        },
        {
          "id": "tray-pull-held",
          "object": "tray",
          "label": "引く",
          "title": "トレイ",
          "result": [
            "トレイ：開　／　表示：0"
          ],
          "evidence": [
            "open_contact_zero"
          ],
          "requiresState": {
            "tray": "released",
            "tab": "held"
          },
          "setsState": {
            "tray": "open"
          },
          "image": "assets/future-v5/tray-open-zero.svg",
          "imageAlt": "開いたトレイと表示 0"
        },
        {
          "id": "tray-pull-home",
          "object": "tray",
          "label": "引く",
          "title": "トレイ",
          "result": [
            "トレイ：開　／　表示：0"
          ],
          "evidence": [
            "open_contact_zero"
          ],
          "requiresState": {
            "tray": "released",
            "tab": "home"
          },
          "setsState": {
            "tray": "open"
          },
          "image": "assets/future-v5/contact-home-open.svg",
          "imageAlt": "開いたトレイの前板にはまった札。表示0"
        },
        {
          "id": "tray-close",
          "object": "tray",
          "label": "戻す",
          "title": "トレイ",
          "result": [
            "トレイを押し戻した。"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "open"
          },
          "setsState": {
            "tray": "closed"
          }
        },
        {
          "id": "contact-read",
          "object": "contact",
          "label": "銘板",
          "title": "表示器",
          "result": [
            "入力 M　磁気接点　0 / 1"
          ],
          "evidence": [
            "contact_label"
          ]
        },
        {
          "id": "tab-lift-contact",
          "object": "contact",
          "label": "外す",
          "title": "表示器",
          "result": [
            "表示：0"
          ],
          "evidence": [
            "tab_off"
          ],
          "requiresState": {
            "tab": "contact"
          },
          "setsState": {
            "tab": "held"
          },
          "visuals": [
            {
              "requiresState": {
                "tray": "open"
              },
              "image": "assets/future-v5/tray-open-zero.svg",
              "imageAlt": "開いたトレイ、外した札、表示0"
            },
            {
              "requiresState": {
                "tray": "closed"
              },
              "image": "assets/future-v5/contact-zero.svg",
              "imageAlt": "閉じたトレイ、外した札、表示0"
            },
            {
              "requiresState": {
                "tray": "released"
              },
              "image": "assets/future-v5/contact-zero.svg",
              "imageAlt": "閉じたトレイ、外した札、表示0"
            }
          ]
        },
        {
          "id": "tab-lift-home",
          "object": "contact",
          "label": "外す",
          "title": "表示器",
          "result": [
            "表示：0"
          ],
          "evidence": [
            "tab_off"
          ],
          "requiresState": {
            "tab": "home"
          },
          "setsState": {
            "tab": "held"
          },
          "visuals": [
            {
              "requiresState": {
                "tray": "open"
              },
              "image": "assets/future-v5/tray-open-zero.svg",
              "imageAlt": "開いたトレイ、外した札、表示0"
            },
            {
              "requiresState": {
                "tray": "closed"
              },
              "image": "assets/future-v5/contact-zero.svg",
              "imageAlt": "閉じたトレイ、外した札、表示0"
            },
            {
              "requiresState": {
                "tray": "released"
              },
              "image": "assets/future-v5/contact-zero.svg",
              "imageAlt": "閉じたトレイ、外した札、表示0"
            }
          ]
        },
        {
          "id": "tab-place-open",
          "object": "contact",
          "label": "置く",
          "title": "表示器",
          "result": [
            "表示：1"
          ],
          "evidence": [
            "tab_on_open"
          ],
          "requiresState": {
            "tray": "open",
            "tab": "held"
          },
          "setsState": {
            "tab": "contact"
          },
          "image": "assets/future-v5/contact-open-one.svg",
          "imageAlt": "開いたトレイ、表示器横の銀色の札、表示1"
        },
        {
          "id": "tab-place-closed",
          "object": "contact",
          "label": "置く",
          "title": "表示器",
          "result": [
            "表示：1"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "closed",
            "tab": "held"
          },
          "setsState": {
            "tab": "contact"
          }
        },
        {
          "id": "log-read",
          "object": "device-log",
          "label": "読む",
          "title": "機器記録",
          "result": [
            "14:03:18　0",
            "14:05:09　1",
            "14:19:00　1（取得時）",
            "取得元：表示器 M。保存欄：時刻・0/1。"
          ],
          "evidence": [
            "contact_log"
          ]
        },
        {
          "id": "yun-afternoon",
          "object": "yun",
          "label": "聞く",
          "title": "ユン",
          "result": [
            "「14:14、表示が緑で、引き出しも閉じていました。銀色の盤も見たはずです」"
          ],
          "evidence": [
            "yun_first"
          ]
        },
        {
          "id": "tray-front",
          "object": "tray",
          "label": "見る",
          "title": "トレイ",
          "result": [],
          "evidence": [
            "opaque_front"
          ],
          "requiresState": {
            "tray": "closed"
          },
          "visuals": [
            {
              "requiresState": {
                "tab": "contact"
              },
              "image": "assets/future-v5/tray-closed.svg",
              "imageAlt": "窓のない金属の前板。表示1"
            },
            {
              "requiresState": {
                "tab": "held"
              },
              "image": "assets/future-v5/contact-zero.svg",
              "imageAlt": "窓のない前板。札は外れ、表示0"
            },
            {
              "requiresState": {
                "tab": "home"
              },
              "image": "assets/future-v5/contact-home-closed.svg",
              "imageAlt": "窓のない前板にはまった札。表示1"
            }
          ]
        },
        {
          "id": "proxy-output",
          "object": "proxy",
          "label": "履歴",
          "title": "端末",
          "result": [
            "14:12:02　送信：イオ／KOMO",
            "「技師の机で作業中です」"
          ],
          "evidence": [
            "reply_output"
          ]
        },
        {
          "id": "proxy-setting",
          "object": "proxy",
          "label": "設定",
          "title": "端末",
          "result": [
            "14:12　定時実行",
            "本文：「技師の机で作業中です」",
            "保存：前日 17:40",
            "入力：保存文／出力：メッセージ",
            "カメラ・マイク・位置入力：未接続"
          ],
          "evidence": [
            "proxy_setting"
          ]
        },
        {
          "id": "io-afternoon",
          "object": "io",
          "label": "聞く",
          "title": "イオ",
          "result": [
            "「14:12ごろは保管室へ札を取りに行きました。ナギに貸したんです。返答？　毎日の設定を止め忘れていました」"
          ],
          "evidence": [
            "io_first"
          ]
        },
        {
          "id": "slip-read",
          "object": "return-slip",
          "label": "読む",
          "title": "返却控え",
          "result": [
            "共用台車 C-6",
            "イオ　使用 13:40／返却 14:00",
            "返却引き出し：空"
          ],
          "evidence": [
            "old_return"
          ]
        },
        {
          "id": "reader-log",
          "object": "reader",
          "label": "履歴",
          "title": "札の読取器",
          "result": [
            "14:04:22　札 I-08　有効",
            "14:11:51　札 I-08　有効",
            "項目：時刻・札番号・照合結果"
          ],
          "evidence": [
            "reader_log"
          ]
        },
        {
          "id": "reader-look",
          "object": "reader",
          "label": "見る",
          "title": "札の読取器",
          "result": [],
          "evidence": [
            "reader_face"
          ],
          "image": "assets/future-v5/reader.svg",
          "imageAlt": "保管室側を向く黒い読取面と前の戸口"
        },
        {
          "id": "tools-look",
          "object": "tools",
          "label": "見る",
          "title": "工具",
          "result": [],
          "evidence": [
            "shared_tools"
          ],
          "image": "assets/future-v5/tools.svg",
          "imageAlt": "同じ形の緑色のくさび二本と金属のへら"
        },
        {
          "id": "nagi-afternoon",
          "object": "nagi",
          "label": "聞く",
          "title": "ナギ",
          "result": [
            "「14:04から読取器を掃除しました。イオの札を借りて。トレイには触っていません」"
          ],
          "evidence": [
            "nagi_first"
          ]
        },
        {
          "id": "nagi-return",
          "object": "nagi",
          "label": "返却",
          "title": "ナギ",
          "result": [
            "「14:07ごろ、試験盤を一枚、台車の口へ奥まで入れました。下で音がして、口は空になりました」",
            "「14:09にルイが白い帯を掛けるまで、台車のところにいました」"
          ],
          "evidence": [
            "nagi_return"
          ]
        },
        {
          "id": "drawer-seal",
          "object": "drawer",
          "label": "見る",
          "title": "返却引き出し",
          "result": [],
          "evidence": [
            "drawer_seal"
          ],
          "requiresState": {
            "drawer": "sealed"
          },
          "image": "assets/future-v5/drawer-seal.svg",
          "imageAlt": "下の引き出しの合わせ目に赤いD-91、投入口を覆う白いB-204。どちらも切れていない"
        },
        {
          "id": "drawer-open",
          "object": "drawer",
          "label": "帯を切って開ける",
          "title": "返却引き出し",
          "result": [
            "D-91、B-204。切れ目のない二本の帯を切り、脇へ置いた。"
          ],
          "evidence": [
            "drawer_seal",
            "drawer_open"
          ],
          "requiresState": {
            "drawer": "sealed"
          },
          "setsState": {
            "drawer": "open"
          },
          "image": "assets/future-v5/drawer-open.svg",
          "imageAlt": "開いた浅い返却引き出しに銀色の盤一枚"
        },
        {
          "id": "disc-turn",
          "object": "drawer",
          "label": "持ち上げる",
          "title": "返却引き出し",
          "result": [
            "縁の刻印：A-17"
          ],
          "evidence": [
            "recovered_disc"
          ],
          "requiresState": {
            "drawer": "open",
            "disc": "inside"
          },
          "setsState": {
            "disc": "removed"
          },
          "image": "assets/future-v5/recovered-disc.svg",
          "imageAlt": "取り出された盤。縁に A-17"
        },
        {
          "id": "chute-look",
          "object": "chute",
          "label": "のぞく",
          "title": "投入口",
          "result": [],
          "evidence": [
            "chute_inside"
          ],
          "requiresState": {
            "drawer": "open",
            "disc": "removed"
          },
          "image": "assets/future-v5/chute-section.svg",
          "imageAlt": "投入口の斜面、その下の返却引き出し"
        },
        {
          "id": "chute-test",
          "object": "test-disc",
          "label": "入れる",
          "title": "試験盤",
          "result": [
            "金属の触れる音がした。"
          ],
          "evidence": [],
          "requiresState": {
            "drawer": "closed",
            "disc": "removed",
            "chute": "untested"
          },
          "setsState": {
            "chute": "tested"
          }
        },
        {
          "id": "receipt-read",
          "object": "receipt",
          "label": "読む",
          "title": "搬出伝票",
          "result": [
            "共用台車 C-6",
            "14:00　返却引き出し：空／封帯 D-91",
            "14:09　投入口：封帯 B-204",
            "引き取り予定：14:30"
          ],
          "evidence": [
            "dispatch_receipt"
          ]
        },
        {
          "id": "rui-afternoon",
          "object": "rui",
          "label": "聞く",
          "title": "ルイ",
          "result": [
            "「14:00に、空の引き出しへ赤い封帯を貼りました。14:09にはナギのところで白い帯を掛けました。引き出しは開けていません」"
          ],
          "evidence": [
            "rui_first"
          ]
        },
        {
          "id": "rui-check",
          "object": "rui",
          "label": "点検",
          "title": "ルイ",
          "result": [
            "「14:03には原本を撮りました。14:16にユンと開け直したら、刻印のない盤だったんです。銀色の小札は、そのときから表示器の横にありました」"
          ],
          "evidence": [
            "rui_photo"
          ]
        },
        {
          "id": "chute-second",
          "object": "test-disc",
          "label": "もう一枚入れる",
          "title": "試験盤",
          "result": [],
          "evidence": [
            "second_disc_blocked"
          ],
          "requiresState": {
            "drawer": "closed",
            "disc": "removed",
            "chute": "tested"
          },
          "setsState": {
            "chute": "blocked"
          },
          "image": "assets/future-v5/chute-blocked.svg",
          "imageAlt": "閉じた返却引き出しと、投入口から縁が出ている二枚目の盤"
        },
        {
          "id": "chute-reset",
          "object": "test-disc",
          "label": "取り出す",
          "title": "試験盤",
          "result": [
            "試験盤を取り出した。"
          ],
          "evidence": [],
          "requiresState": {
            "drawer": "open",
            "disc": "removed",
            "chute": "tested"
          },
          "setsState": {
            "chute": "untested"
          }
        },
        {
          "id": "drawer-return",
          "object": "drawer",
          "label": "戻す",
          "title": "返却引き出し",
          "result": [
            "引き出しを奥まで戻した。"
          ],
          "evidence": [],
          "requiresState": {
            "drawer": "open"
          },
          "setsState": {
            "drawer": "closed"
          }
        },
        {
          "id": "drawer-pull-empty",
          "object": "drawer",
          "label": "引く",
          "title": "返却引き出し",
          "result": [],
          "evidence": [],
          "requiresState": {
            "drawer": "closed",
            "chute": "untested"
          },
          "setsState": {
            "drawer": "open"
          }
        },
        {
          "id": "drawer-pull-test",
          "object": "drawer",
          "label": "引く",
          "title": "返却引き出し",
          "result": [],
          "evidence": [
            "chute_test"
          ],
          "requiresState": {
            "drawer": "closed",
            "chute": "tested"
          },
          "setsState": {
            "drawer": "open"
          },
          "image": "assets/future-v5/chute-test.svg",
          "imageAlt": "開いた返却引き出しの丸いくぼみに黄色い縁の試験盤"
        },
        {
          "id": "chute-clear-second",
          "object": "test-disc",
          "label": "引き戻す",
          "title": "試験盤",
          "result": [
            "口に止まった盤を引き戻した。"
          ],
          "evidence": [],
          "requiresState": {
            "chute": "blocked"
          },
          "setsState": {
            "chute": "tested"
          }
        },
        {
          "id": "tab-home-open",
          "object": "contact",
          "label": "はめる",
          "title": "銀色の札",
          "result": [
            "前板の凹みに収まった。表示：0"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "open",
            "tab": "held"
          },
          "setsState": {
            "tab": "home"
          }
        },
        {
          "id": "tab-home-closed",
          "object": "contact",
          "label": "はめる",
          "title": "銀色の札",
          "result": [
            "前板の凹みに収まった。表示：1"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "closed",
            "tab": "held"
          },
          "setsState": {
            "tab": "home"
          }
        },
        {
          "id": "contact-see-closed-contact",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：1"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "closed",
            "tab": "contact"
          }
        },
        {
          "id": "contact-see-closed-held",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：0"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "closed",
            "tab": "held"
          }
        },
        {
          "id": "contact-see-closed-home",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：1"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "closed",
            "tab": "home"
          }
        },
        {
          "id": "contact-see-released-contact",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：1"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "released",
            "tab": "contact"
          }
        },
        {
          "id": "contact-see-released-held",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：0"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "released",
            "tab": "held"
          }
        },
        {
          "id": "contact-see-released-home",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：1"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "released",
            "tab": "home"
          }
        },
        {
          "id": "contact-see-open-contact",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：1"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "open",
            "tab": "contact"
          }
        },
        {
          "id": "contact-see-open-held",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：0"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "open",
            "tab": "held"
          }
        },
        {
          "id": "contact-see-open-home",
          "object": "contact",
          "label": "見る",
          "title": "表示器",
          "result": [
            "表示：0"
          ],
          "evidence": [],
          "requiresState": {
            "tray": "open",
            "tab": "home"
          }
        }
      ],
      "evidence": [
        {
          "id": "original_photo",
          "title": "14:03の点検写真",
          "kind": "調査記録",
          "body": [
            "撮影端末 R-2　14:03:18",
            "開いたトレイ。盤の縁に「A-17」。"
          ],
          "image": "assets/future-v5/original-photo.svg",
          "imageAlt": "14:03の点検写真"
        },
        {
          "id": "tray_controls",
          "title": "二枚の解除板",
          "kind": "調査記録",
          "body": [
            "左右の板を押すと、小さな爪が引っ込んだ。手を離しても戻らない。"
          ]
        },
        {
          "id": "open_contact_one",
          "title": "引き出したトレイ",
          "kind": "調査記録",
          "body": [
            "トレイ：開　／　表示：1",
            "中央の盤には刻印がない。"
          ],
          "image": "assets/future-v5/tray-open-one.svg",
          "imageAlt": "引き出したトレイ"
        },
        {
          "id": "open_contact_zero",
          "title": "引き出したトレイ・表示0",
          "kind": "調査記録",
          "body": [
            "トレイ：開　／　表示：0"
          ]
        },
        {
          "id": "contact_label",
          "title": "表示器の銘板",
          "kind": "調査記録",
          "body": [
            "入力 M：磁気接点",
            "出力：0 / 1",
            "回線：表示・記録"
          ]
        },
        {
          "id": "tab_off",
          "title": "札を外した表示",
          "kind": "調査記録",
          "body": [
            "銀色の札を外した。表示は0になった。"
          ]
        },
        {
          "id": "tab_on_open",
          "title": "開いたままの表示",
          "kind": "調査記録",
          "body": [
            "トレイ：開　／　札：表示器の横　／　表示：1"
          ],
          "image": "assets/future-v5/contact-open-one.svg",
          "imageAlt": "開いたままの表示"
        },
        {
          "id": "contact_log",
          "title": "入力Mの記録",
          "kind": "調査記録",
          "body": [
            "14:03:18　0",
            "14:05:09　1",
            "14:19:00　1（取得時）",
            "取得元：表示器 M。保存欄：時刻・0/1。"
          ]
        },
        {
          "id": "yun_first",
          "title": "ユンの確認",
          "kind": "調査記録",
          "body": [
            "「14:14、表示が緑で、引き出しも閉じていました。銀色の盤も見たはずです」"
          ]
        },
        {
          "id": "opaque_front",
          "title": "閉じた前板",
          "kind": "調査記録",
          "body": [
            "閉じたトレイの前板は金属製。窓はない。"
          ]
        },
        {
          "id": "yun_revision",
          "title": "ユンの言い直し",
          "kind": "調査記録",
          "body": [
            "「盤の形は、さっきの写真だったかもしれません。14:14に見たのは、前板と緑の表示です」"
          ]
        },
        {
          "id": "reply_output",
          "title": "14:12の返答",
          "kind": "調査記録",
          "body": [
            "14:12:02　送信：イオ／KOMO",
            "「技師の机で作業中です」"
          ]
        },
        {
          "id": "proxy_setting",
          "title": "返答の設定",
          "kind": "調査記録",
          "body": [
            "14:12　定時実行",
            "本文：「技師の机で作業中です」",
            "保存：前日 17:40",
            "入力：保存文／出力：メッセージ",
            "カメラ・マイク・位置入力：未接続"
          ]
        },
        {
          "id": "io_first",
          "title": "イオの午後",
          "kind": "調査記録",
          "body": [
            "「14:12ごろは保管室へ札を取りに行きました。ナギに貸したんです。返答？　毎日の設定を止め忘れていました」"
          ]
        },
        {
          "id": "old_return",
          "title": "台車の返却控え",
          "kind": "調査記録",
          "body": [
            "共用台車 C-6",
            "イオ　使用 13:40／返却 14:00",
            "返却引き出し：空"
          ]
        },
        {
          "id": "reader_log",
          "title": "札の読取履歴",
          "kind": "調査記録",
          "body": [
            "14:04:22　札 I-08　有効",
            "14:11:51　札 I-08　有効",
            "項目：時刻・札番号・照合結果"
          ]
        },
        {
          "id": "reader_face",
          "title": "読取器の面",
          "kind": "調査記録",
          "body": [
            "黒い読取面は保管室側。"
          ],
          "image": "assets/future-v5/reader.svg",
          "imageAlt": "読取器の面"
        },
        {
          "id": "shared_tools",
          "title": "共用工具",
          "kind": "調査記録",
          "body": [
            "同じ形の緑色のくさびが二本。どちらにも個人名はない。"
          ],
          "image": "assets/future-v5/tools.svg",
          "imageAlt": "共用工具"
        },
        {
          "id": "nagi_first",
          "title": "ナギの作業",
          "kind": "調査記録",
          "body": [
            "「14:04から読取器を掃除しました。イオの札を借りて。トレイには触っていません」"
          ]
        },
        {
          "id": "nagi_return",
          "title": "ナギの返却",
          "kind": "調査記録",
          "body": [
            "「14:07ごろ、試験盤を一枚、台車の口へ奥まで入れました。下で音がして、口は空になりました」",
            "「14:09にルイが白い帯を掛けるまで、台車のところにいました」"
          ]
        },
        {
          "id": "drawer_seal",
          "title": "引き出しの帯",
          "kind": "調査記録",
          "body": [
            "引き出しの合わせ目：D-91。細い赤い封帯。",
            "投入口と台車の外周：B-204。白い帯。",
            "どちらにも切れ目はない。"
          ],
          "image": "assets/future-v5/drawer-seal.svg",
          "imageAlt": "下の引き出しの合わせ目に赤いD-91、投入口を覆う白いB-204。どちらも切れていない"
        },
        {
          "id": "drawer_open",
          "title": "返却引き出しの中",
          "kind": "調査記録",
          "body": [
            "円形のくぼみに、盤が一枚。",
            "くぼみ：直径760mm／高さ34mm。盤：直径740mm／厚さ22mm。"
          ],
          "image": "assets/future-v5/drawer-open.svg",
          "imageAlt": "返却引き出しの中"
        },
        {
          "id": "recovered_disc",
          "title": "返却引き出しの盤",
          "kind": "調査記録",
          "body": [
            "縁の刻印：A-17"
          ],
          "image": "assets/future-v5/recovered-disc.svg",
          "imageAlt": "返却引き出しの盤"
        },
        {
          "id": "chute_inside",
          "title": "投入口の内側",
          "kind": "調査記録",
          "body": [
            "投入口の斜面。途中に内向きの返し板。下には丸いくぼみ。"
          ],
          "image": "assets/future-v5/chute-section.svg",
          "imageAlt": "斜面の途中に内向きの返し板。下に円形のくぼみのある引き出し"
        },
        {
          "id": "chute_test",
          "title": "試験盤を入れた結果",
          "kind": "調査記録",
          "body": [
            "黄色い縁の盤が、返却引き出しに収まった。"
          ],
          "image": "assets/future-v5/chute-test.svg",
          "imageAlt": "試験盤を入れた結果"
        },
        {
          "id": "dispatch_receipt",
          "title": "14:09の搬出伝票",
          "kind": "調査記録",
          "body": [
            "共用台車 C-6",
            "14:00　返却引き出し：空／封帯 D-91",
            "14:09　投入口：封帯 B-204",
            "引き取り予定：14:30"
          ]
        },
        {
          "id": "rui_first",
          "title": "ルイの受付",
          "kind": "調査記録",
          "body": [
            "「14:00に、空の引き出しへ赤い封帯を貼りました。14:09にはナギのところで白い帯を掛けました。引き出しは開けていません」"
          ]
        },
        {
          "id": "rui_photo",
          "title": "ルイの点検",
          "kind": "調査記録",
          "body": [
            "「14:03には原本を撮りました。14:16にユンと開け直したら、刻印のない盤だったんです。銀色の小札は、そのときから表示器の横にありました」"
          ]
        },
        {
          "id": "disc_identified",
          "title": "二つのA-17",
          "kind": "調査記録",
          "body": [
            "写真の盤：A-17",
            "引き出しの盤：A-17"
          ],
          "image": "assets/future-v5/disc-compare.svg",
          "imageAlt": "二つのA-17"
        },
        {
          "id": "nagi_transfer_admission",
          "title": "ナギが移した盤",
          "kind": "調査記録",
          "body": [
            "「試験盤じゃありません。私がトレイから出した原本です。返却便に紛れ込ませました。ルイは知らなかった」"
          ]
        },
        {
          "id": "nagi_reason",
          "title": "ナギの事情",
          "kind": "調査記録",
          "body": [
            "「原本を手放す契約が決まったと聞いて……自分で隠しておけば、止められると思った。持ち出してよい理由にはなりませんね」"
          ]
        },
        {
          "id": "second_disc_blocked",
          "title": "二枚目の試験盤",
          "kind": "調査記録",
          "body": [
            "二枚目は斜面の途中で止まり、投入口から縁が出ている。"
          ],
          "image": "assets/future-v5/chute-blocked.svg",
          "imageAlt": "閉じた返却引き出しと、投入口から縁が出ている二枚目の盤"
        },
        {
          "id": "nagi_disc_denial",
          "title": "盤を示したナギの返答",
          "kind": "証言",
          "body": [
            "「A-17……？　私が返したのは試験盤です。あの台車は、皆が使うでしょう」"
          ]
        }
      ],
      "comparisons": [
        {
          "id": "disc-compare",
          "pair": [
            "original_photo",
            "recovered_disc"
          ],
          "title": "二つの記録",
          "result": [
            "A-17　／　A-17"
          ],
          "evidence": [
            "disc_identified"
          ],
          "image": "assets/future-v5/disc-compare.svg",
          "imageAlt": "点検写真と取り出した盤の刻印 A-17 を並べた図"
        },
        {
          "id": "seal-compare",
          "pair": [
            "drawer_seal",
            "dispatch_receipt"
          ],
          "title": "二つの記録",
          "result": [
            "封帯：D-91、B-204　／　伝票：D-91、B-204"
          ],
          "evidence": []
        },
        {
          "id": "display-compare",
          "pair": [
            "open_contact_one",
            "tab_off"
          ],
          "title": "二つの記録",
          "result": [
            "開／1　　札を外した表示／0"
          ],
          "evidence": []
        }
      ],
      "topics": [
        {
          "id": "afternoon",
          "label": "午後の作業"
        },
        {
          "id": "disc",
          "label": "録音盤"
        },
        {
          "id": "device",
          "label": "装置"
        },
        {
          "id": "reply",
          "label": "返答"
        },
        {
          "id": "reason",
          "label": "事情",
          "requires": [
            "nagi_transfer_admission"
          ]
        }
      ],
      "responses": [
        {
          "id": "yun-window",
          "person": "yun",
          "topic": "*",
          "title": "三枝 ユン",
          "result": [
            "「盤の形は、さっきの写真だったかもしれません。14:14に見たのは、前板と緑の表示です」"
          ],
          "evidence": [
            "yun_revision"
          ],
          "priority": 40,
          "requires": [],
          "selectedAll": [
            "opaque_front"
          ]
        },
        {
          "id": "nagi-disc-raw",
          "person": "nagi",
          "topic": "*",
          "title": "黒瀬 ナギ",
          "result": [
            "「試験盤じゃありません。私がトレイから出した原本です。返却便に紛れ込ませました。ルイは知らなかった」"
          ],
          "evidence": [
            "nagi_transfer_admission"
          ],
          "priority": 100,
          "requires": [
            "nagi_return",
            "dispatch_receipt",
            "recovered_disc",
            "original_photo",
            "drawer_seal"
          ],
          "resolves": [
            "transfer"
          ],
          "selectedAnyOf": [
            [
              "recovered_disc"
            ],
            [
              "disc_identified"
            ]
          ],
          "anyRequires": [
            "chute_inside",
            "chute_test"
          ]
        },
        {
          "id": "nagi-disc-id",
          "person": "nagi",
          "topic": "*",
          "title": "黒瀬 ナギ",
          "result": [
            "「試験盤じゃありません。私がトレイから出した原本です。返却便に紛れ込ませました。ルイは知らなかった」"
          ],
          "evidence": [
            "nagi_transfer_admission"
          ],
          "priority": 100,
          "requires": [
            "nagi_return",
            "dispatch_receipt",
            "recovered_disc",
            "original_photo",
            "drawer_seal"
          ],
          "resolves": [
            "transfer"
          ],
          "selectedAnyOf": [
            [
              "recovered_disc"
            ],
            [
              "disc_identified"
            ]
          ],
          "anyRequires": [
            "chute_inside",
            "chute_test"
          ]
        },
        {
          "id": "nagi-disc-record",
          "person": "nagi",
          "topic": "*",
          "title": "黒瀬 ナギ",
          "result": [
            "「試験盤じゃありません。私がトレイから出した原本です。返却便に紛れ込ませました。ルイは知らなかった」"
          ],
          "evidence": [
            "nagi_transfer_admission"
          ],
          "priority": 100,
          "requires": [
            "nagi_return",
            "dispatch_receipt",
            "recovered_disc",
            "original_photo",
            "drawer_seal"
          ],
          "resolves": [
            "transfer"
          ],
          "selectedAnyOf": [
            [
              "recovered_disc"
            ],
            [
              "disc_identified"
            ]
          ],
          "anyRequires": [
            "chute_inside",
            "chute_test"
          ]
        },
        {
          "id": "nagi-return-question",
          "person": "nagi",
          "topic": "disc",
          "title": "黒瀬 ナギ",
          "result": [
            "「14:07ごろ、試験盤を一枚、台車の口へ奥まで入れました。下で音がして、口は空になりました」",
            "「14:09にルイが白い帯を掛けるまで、台車のところにいました」"
          ],
          "evidence": [
            "nagi_return"
          ],
          "priority": 20,
          "selectedAnyOf": [
            [
              "recovered_disc"
            ],
            [
              "dispatch_receipt"
            ]
          ]
        },
        {
          "id": "nagi-reason",
          "person": "nagi",
          "topic": "reason",
          "title": "黒瀬 ナギ",
          "result": [
            "「原本を手放す契約が決まったと聞いて……自分で隠しておけば、止められると思った。持ち出してよい理由にはなりませんね」"
          ],
          "evidence": [
            "nagi_reason"
          ],
          "priority": 20,
          "requires": [
            "nagi_transfer_admission"
          ]
        },
        {
          "id": "io-afternoon",
          "person": "io",
          "topic": "afternoon",
          "title": "遠藤 イオ",
          "result": [
            "「14:12ごろは保管室へ札を取りに行きました。ナギに貸したんです。返答？　毎日の設定を止め忘れていました」"
          ],
          "evidence": [
            "io_first"
          ],
          "priority": 1,
          "withoutEvidence": true
        },
        {
          "id": "nagi-afternoon",
          "person": "nagi",
          "topic": "afternoon",
          "title": "黒瀬 ナギ",
          "result": [
            "「14:04から読取器を掃除しました。イオの札を借りて。トレイには触っていません」"
          ],
          "evidence": [
            "nagi_first"
          ],
          "priority": 1,
          "withoutEvidence": true
        },
        {
          "id": "yun-afternoon",
          "person": "yun",
          "topic": "afternoon",
          "title": "三枝 ユン",
          "result": [
            "「14:14、表示が緑で、引き出しも閉じていました。銀色の盤も見たはずです」"
          ],
          "evidence": [
            "yun_first"
          ],
          "priority": 1,
          "withoutEvidence": true
        },
        {
          "id": "rui-afternoon",
          "person": "rui",
          "topic": "afternoon",
          "title": "真野 ルイ",
          "result": [
            "「14:00に、空の引き出しへ赤い封帯を貼りました。14:09にはナギのところで白い帯を掛けました。引き出しは開けていません」"
          ],
          "evidence": [
            "rui_first"
          ],
          "priority": 1,
          "withoutEvidence": true
        },
        {
          "id": "io-reply",
          "person": "io",
          "topic": "reply",
          "title": "遠藤 イオ",
          "result": [
            "「14:12ごろは保管室へ札を取りに行きました。ナギに貸したんです。返答？　毎日の設定を止め忘れていました」"
          ],
          "evidence": [
            "io_first"
          ],
          "priority": 1,
          "withoutEvidence": true
        },
        {
          "id": "nagi-disc-denial",
          "person": "nagi",
          "topic": "*",
          "selectedAll": [
            "recovered_disc",
            "original_photo"
          ],
          "title": "ナギ",
          "result": [
            "「A-17……？　私が返したのは試験盤です。あの台車は、皆が使うでしょう」"
          ],
          "evidence": [
            "nagi_disc_denial"
          ],
          "priority": 50
        },
        {
          "id": "io-shown-reply",
          "person": "io",
          "topic": "*",
          "title": "イオ",
          "selectedAnyOf": [
            [
              "reply_output"
            ],
            [
              "proxy_setting"
            ]
          ],
          "result": [
            "「14:12ごろは保管室へ札を取りに行きました。ナギに貸したんです。返答？　毎日の設定を止め忘れていました」"
          ],
          "evidence": [
            "io_first"
          ],
          "priority": 30
        }
      ],
      "fallbackResponses": {
        "io": {
          "default": "「今の話だけでは、何を答えればよいか分かりません」"
        },
        "nagi": {
          "default": "「今の話だけでは、何を答えればよいか分かりません」"
        },
        "yun": {
          "default": "「今の話だけでは、何を答えればよいか分かりません」"
        },
        "rui": {
          "default": "「今の話だけでは、何を答えればよいか分かりません」"
        }
      },
      "incidents": [
        {
          "id": "transfer",
          "title": "原本の行方"
        },
        {
          "id": "sequence",
          "title": "閉じていた記録"
        }
      ],
      "endingSegments": [
        {
          "incident": "transfer",
          "resolved": "transfer",
          "text": "返却引き出しから原本 A-17 が戻った。ナギは、自分でトレイから取り出し、返却便へ紛れ込ませたと認めた。"
        },
        {
          "incident": "sequence",
          "resolved": "sequence",
          "text": "入力Mが記録していたのは磁気接点だった。銀色の札を表示器の横に置くと、トレイを引き出しても1が残った。14:05の記録は、実際に閉じた時刻を定められない。"
        },
        {
          "requires": [
            "nagi_reason"
          ],
          "resolved": "transfer",
          "text": "ナギは原本の売却を止めたかったと話した。原本は資料館に戻された。"
        },
        {
          "requires": [
            "proxy_setting",
            "reply_output",
            "io_first"
          ],
          "text": "14:12の返答は、保存されていた文の定時送信だった。イオはそのころ保管室へ札を取りに行ったと話している。"
        }
      ],
      "hints": [
        [
          "二つのこと",
          "原本の行方と、トレイの記録は別々に調べられます。"
        ],
        [
          "返却台車",
          "下の引き出しを開け、中の盤の縁を確かめてください。空にした後は、試験盤を入れて動きを確かめられます。"
        ],
        [
          "表示器",
          "トレイを引き出したときと、銀色の札を外したとき。表示の数字を比べてください。"
        ],
        [
          "ナギに確かめる",
          "原本と点検写真、二本の封帯と伝票、ナギの返却作業の話、返却口の内側がそろったら、原本の話題で盤と写真を示せます。試験盤で動きを確かめることもできます。"
        ],
        [
          "結論",
          "ナギが原本を返却口へ入れました。入力Mの1は磁石が接点の近くにある状態で、トレイが閉じているとは限りません。原本の移動を先に確かめても、表示器の仕組みを先に解いてもかまいません。"
        ]
      ],
      "reconstruction": {
        "requires": [
          "contact_label",
          "contact_log",
          "tab_off"
        ],
        "title": "機械記録の説明",
        "result": [
          "記録に説明を残した。"
        ],
        "evidence": [],
        "resolves": [
          "sequence"
        ],
        "clauses": [
          {
            "id": "reading",
            "prompt": "入力Mの「1」は？",
            "options": [
              {
                "id": "tray",
                "text": "トレイが奥まで戻ったこと"
              },
              {
                "id": "magnet",
                "text": "接点のそばに磁石があること"
              },
              {
                "id": "disc",
                "text": "盤が原本であること"
              }
            ],
            "answer": "magnet"
          },
          {
            "id": "state",
            "prompt": "14:05の記録と両立する状態は？",
            "options": [
              {
                "id": "open",
                "text": "トレイが開いたままでも、札が接点の横にある"
              },
              {
                "id": "sealed",
                "text": "トレイも盤も、14:16まで触れられていない"
              },
              {
                "id": "motor",
                "text": "記録回線からトレイを自動で閉じる"
              }
            ],
            "answer": "open"
          },
          {
            "id": "limit",
            "prompt": "この記録から、盤が動いた時刻は？",
            "options": [
              {
                "id": "five",
                "text": "14:05と確定できる"
              },
              {
                "id": "sixteen",
                "text": "14:16以降と確定できる"
              },
              {
                "id": "unknown",
                "text": "入力Mだけでは確定できない"
              }
            ],
            "answer": "unknown"
          }
        ],
        "anyRequires": [
          "open_contact_one",
          "tab_on_open"
        ]
      },
      "transferReconstruction": {
        "requires": [
          "original_photo",
          "recovered_disc",
          "drawer_seal",
          "dispatch_receipt",
          "nagi_return"
        ],
        "title": "原本の移動",
        "result": [
          "「試験盤じゃありません。私がトレイから出した原本です。返却便に紛れ込ませました。ルイは知らなかった」"
        ],
        "evidence": [
          "nagi_transfer_admission"
        ],
        "resolves": [
          "transfer"
        ],
        "clauses": [
          {
            "id": "transfer_person",
            "prompt": "原本を返却口へ入れたのは？",
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
              },
              {
                "id": "rui",
                "text": "真野 ルイ"
              }
            ],
            "answer": "nagi"
          },
          {
            "id": "transfer_route",
            "prompt": "原本が通った順序は？",
            "options": [
              {
                "id": "chute",
                "text": "保管トレイ → 投入口 → 返却引き出し"
              },
              {
                "id": "drawer",
                "text": "14:09の封のあと、引き出しを開けて入れた"
              },
              {
                "id": "old",
                "text": "14:00以前から、返却引き出しに入っていた"
              }
            ],
            "answer": "chute"
          },
          {
            "id": "transfer_limit",
            "prompt": "返却口の一枚と、引き出しの原本は？",
            "options": [
              {
                "id": "both",
                "text": "別の二枚で、中に重なっていた"
              },
              {
                "id": "original",
                "text": "返却口へ入れた一枚が、引き出しの原本だった"
              },
              {
                "id": "unknown",
                "text": "原本は返却口を通っていない"
              }
            ],
            "answer": "original"
          }
        ],
        "anyRequires": [
          "chute_inside",
          "chute_test"
        ]
      }
    }
  },
  "caseIds": [
    "village",
    "future"
  ],
  "version": 5,
  "imageSizes": {
    "assets/altar-covered.png": [
      1200,
      1000
    ],
    "assets/altar-uncovered.png": [
      1200,
      1000
    ],
    "assets/enamel-detail.svg": [
      960,
      800
    ],
    "assets/enamel-shards-only.svg": [
      960,
      580
    ],
    "assets/foot-comparison.svg": [
      960,
      390
    ],
    "assets/future-v2.svg": [
      1000,
      480
    ],
    "assets/future-v5/chute-blocked.svg": [
      1000,
      780
    ],
    "assets/future-v5/chute-section.svg": [
      1000,
      780
    ],
    "assets/future-v5/chute-test.svg": [
      1000,
      780
    ],
    "assets/future-v5/contact-home-closed.svg": [
      1000,
      780
    ],
    "assets/future-v5/contact-home-open.svg": [
      1000,
      780
    ],
    "assets/future-v5/contact-label.svg": [
      1000,
      780
    ],
    "assets/future-v5/contact-open-one.svg": [
      1000,
      780
    ],
    "assets/future-v5/contact-zero.svg": [
      1000,
      780
    ],
    "assets/future-v5/disc-compare.svg": [
      1000,
      610
    ],
    "assets/future-v5/drawer-empty.svg": [
      1000,
      780
    ],
    "assets/future-v5/drawer-open.svg": [
      1000,
      780
    ],
    "assets/future-v5/drawer-seal.svg": [
      1000,
      780
    ],
    "assets/future-v5/original-photo.svg": [
      1000,
      780
    ],
    "assets/future-v5/reader.svg": [
      1000,
      780
    ],
    "assets/future-v5/recovered-disc.svg": [
      1000,
      780
    ],
    "assets/future-v5/tools.svg": [
      1000,
      780
    ],
    "assets/future-v5/tray-closed.svg": [
      1000,
      780
    ],
    "assets/future-v5/tray-open-one.svg": [
      1000,
      780
    ],
    "assets/future-v5/tray-open-zero.svg": [
      1000,
      780
    ],
    "assets/future-v5/tray-open.svg": [
      1000,
      780
    ],
    "assets/future.svg": [
      1000,
      740
    ],
    "assets/sluice-closed.png": [
      1000,
      800
    ],
    "assets/sluice-open.png": [
      1000,
      800
    ],
    "assets/sluice-raised.png": [
      1000,
      800
    ],
    "assets/sluice-stop-removed.png": [
      1000,
      800
    ],
    "assets/village.svg": [
      1080,
      1040
    ]
  }
};if(typeof module!=='undefined'&&module.exports)module.exports=data;root.MysteryData=data;})(typeof globalThis!=='undefined'?globalThis:this);
