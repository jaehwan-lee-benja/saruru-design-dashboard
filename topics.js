// ══════════════════════════════════════════════════════════════
//  사르르목장 디자인 아카이브 — 주제(키워드) 단위 인덱스
//  모델: 주제(Topic) → 에셋(Asset) → 버전(Version) → 파생(Variant)
//  · v번호는 대시보드 전용(Drive에 없음) → 항상 날짜와 병기
//  · x: 교차 주제(이 파일이 함께 걸치는 주제) — 파일↔주제는 다대다
//  · 정본: saruru-design/ARCHIVE-TOPICS.md
// ══════════════════════════════════════════════════════════════

const CATS = {
  A:{name:'사이니지 · 매장 안내', pri:'1순위', prik:'p1', desc:'매장에 붙는 모든 안내. 최대 덩어리이자 통일 효과가 가장 큰 곳.'},
  B:{name:'메뉴 · 가격',        pri:'2순위', prik:'p1', desc:'고객 구매 결정에 직접 닿는 접점.'},
  C:{name:'패키지 · 라벨',      pri:'3순위', prik:'px', desc:'제품 부착물. 칼선이 곧 자산.'},
  D:{name:'홍보 · 캠페인',      pri:'4순위', prik:'px', desc:'한시적이지만 브랜드 인상을 좌우.'},
  E:{name:'공간 조형 · 시즌',   pri:'5순위', prik:'px', desc:'물리 제작물. 외주·비용 게이트.'},
  F:{name:'BI · 브랜드 코어',   pri:'정본',  prik:'p0', desc:'다른 모든 것의 상위 규칙. 개선 대상 아님.'},
};

// a:에셋명  v:[{d:날짜, id:DriveID, f:포맷, pdf:PDF ID, note:비고, fd:폴더여부}]  (v는 최신순으로 적음)
const TOPICS = [
// ── A. 사이니지 ─────────────────────────────────────────────
{id:'A01', c:'A', n:'화장실', d:'방향 · 문 표시 · 비품 · 문닫기', x:['A07','A08','A03','A02','A16'], as:[
  {a:'방향 사인', v:[{d:'250619', id:'1zkCa8PN1s_H8qQ0tAujynRxWdcreOstN', f:'AI'}]},
  {a:'문 표시',   v:[{d:'231111', id:'1owBadc1iiBbqoBDPsItAhFuZioBPl0AX', f:'AI', pdf:'18D2KcixnsSOB04g21s5hffF67P9mpCTZ'}]},
  {a:'휴지 안내', v:[{d:'240225', id:'1XU4IWR03uM2ze87YfOHNGk729ddHwFSS', f:'AI', pdf:'12FJXETTbYUh2l_0EK9_7JeSKdtbs0Rmx'}]},
  {a:'문닫기 안내 (화장실쪽 출입문)', v:[{d:'250203', id:'1EzSGXSOMF0RFv19WzVcy24Z-38fAEmPt', f:'AI', note:'A02와 공유'}]},
  {a:'4주제 통합 방향판 (화장실·정수기·반납대·야외석)', v:[
     {d:'250124', id:'1Gl_tWF-S6HivGdXKukGPDtC4Z4snlxUH', f:'AI', note:'★한 파일 4주제'},
     {d:'241228', id:'1NBFAO6JdIGLyFkqI6UcagR5fuEHDI7MO', f:'AI'}]},
]},
{id:'A02', c:'A', n:'출입구 · 문', d:'자동문 · 입구 · 고정문 · 미세요/당기세요', x:['A01','A03','A16'], as:[
  {a:'자동문 안내', v:[{d:'260614', id:'1KBGG8KE6VpCz3M5htm3uRa3AaLYXeSb0', f:'AI', pdf:'1TR0863Xxy4b9BAsUIAQsPRCsRlD4FcVn'}]},
  {a:'입구 안내 (실내·포장·야외)', v:[{d:'260119', id:'1Py9UbPhbVbI8OiD_yEhSBk1B-R3A401O', f:'AI', note:'A03와 공유'}]},
  {a:'고정문 · 미세요 · 당기세요', v:[{d:'250208', id:'1ibDJa8IOF-Ldc40EXtNULl_b72DiDHfl', f:'AI'}]},
  {a:'고정문 안내 (인형쪽)', v:[{d:'250426', id:'1ANj6P18DGhb3q3hBdgGqk93tXT6zOmUu', f:'AI'}]},
  {a:'문닫기 안내', v:[{d:'250203', id:'1EzSGXSOMF0RFv19WzVcy24Z-38fAEmPt', f:'AI', note:'A01과 공유'}]},
]},
{id:'A03', c:'A', n:'야외석', d:'방향 · 출입문 · 줄서기 · 화살표', x:['A01','A02','A16'], as:[
  {a:'방향 안내', v:[
     {d:'241117', id:'1uPe7QQUO_iOnLtSd8-urNsBJj3Izk_kr', f:'AI'},
     {d:'240908', id:'1-rPRRJlMCvBLkH3dQfsRpO-hcNuQT4qi', f:'AI'}]},
  {a:'줄서기 방향 안내', v:[{d:'241006', id:'1OzcFHY4zIMnRsTHdjt8LHN0-ULM42Q1i', f:'AI'}]},
  {a:'야외 화살표 안내', v:[{d:'240329', id:'1cXsvKaIv31x_oS4u3brSkSGMjpoJYoxP', f:'AI', note:'파일명 오타: 회살표'}]},
]},
{id:'A04', c:'A', n:'주차 · 차량', d:'차량통로 · 전후방 주차 · 주차장', x:['A15'], as:[
  {a:'차량통로 확보 안내', v:[
     {d:'250908', id:'1G7csFczbDuw8Q5PJgqUD3C1brjxbwvRZ', f:'AI'},
     {d:'250516', id:'1SR5VcTh_WOFNgq3_Q7buWgEplmFpwYQW', f:'AI'}]},
  {a:'주차장 안내 (폴더)', v:[{d:'—', id:'1hxDNaXyhpp4xgYaPbxyDpIDBwe9HKanf', f:'폴더', fd:1, note:'미탐색'}]},
]},
{id:'A05', c:'A', n:'키오스크 · 주문', d:'부착 안내 · 가리개 · 주문 방향 · 바탕화면', x:['A06','B01'], as:[
  {a:'주문 방향 표시', v:[
     {d:'250522', id:'1f7lEFpph6wsmReVJbaVNQvOIKSEud9Vi', f:'AI'},
     {d:'250512', id:'1jwO_GPi2tD0Hud-nG4iUoeAGcO4B3bOY', f:'AI', note:'키오스크 위'}]},
  {a:'자리먼저 잡고 주문 (키오스크 위)', v:[{d:'260104', id:'1HzJR1EtpwdkBtnyyfjF0fVNtQF_-DnVp', f:'AI'}]},
  {a:'키오스크 가리개 역할 안내판', v:[{d:'251121', id:'1qdZhpuIOdGABWRMKnKlsc4IaV17RjR3-', f:'AI'}]},
  {a:'키오스크 부착 안내문', v:[{d:'240914', id:'1PZRniuBVC2aDLSc1cW4OifqwjUq_Jmkp', f:'AI'}]},
  {a:'키오스크 바탕화면', v:[{d:'260302', id:'1WpaqLcQPL_y1P5FCTh-dxnTFFsqZ1-I5', f:'디지털'}]},
]},
{id:'A06', c:'A', n:'대기 · 자리', d:'자리 대기 · 대기 명단 · 지연 안내', x:['A05','A16'], as:[
  {a:'실내 자리 대기 안내', v:[
     {d:'251021', id:'1yklF6vDszbhjG6LuzOe5OFyeFKbAMXwy', f:'AI', note:'자리안내 미제공'},
     {d:'250825', id:'1uGHG2igYABUtnbc7ZBRo5VFsdGzI3ypH', f:'AI'},
     {d:'250301', id:'1r82IpEmE2DH_2RGKIPreBTGOfIp04cjg', f:'AI'}]},
  {a:'자리 대기 명단 (세로형)', v:[{d:'231028', id:'1GJjPuJm-Npd96q8-2fLagFPm3TgGuzfK', f:'A4', pdf:'1luy9PUmmLEfbVn5vm17lJYDK4BUHhglT'}]},
  {a:'이용안내 · 대기안내', v:[{d:'241104', id:'17AAOBrPfUJH3qHFUrrZ8zaDkUiXeiDr1', f:'AI', note:'A16과 공유'}]},
  {a:'주문 밀리는 경우 (30분 이상)', v:[{d:'250426', id:'1bcPQIYTAlFjIz-zz0pLbem4rq12nC13A', f:'AI'}]},
]},
{id:'A07', c:'A', n:'반납대 · 쟁반', d:'반납대 방향 · 쟁반 제공/받침대', x:['A01','A08','A16'], as:[
  {a:'반납대 방향 안내 (화장실쪽)', v:[{d:'260522', id:'1SM_H-jASGHVrLKDnUp398vDx4s3nI8Ni', f:'AI', note:'⚠빨강 사용 — 브랜드 팔레트 밖'}]},
  {a:'쟁반 나눠서 제공', v:[{d:'250816', id:'1Gz4uzcJVEri_81UDyUjAZ8GY4VlIUBhM', f:'AI'}]},
  {a:'쟁반 받침대', v:[{d:'240614', id:'1PdL65tgwJofQTYRmpIxBEZFtDSS1PXgt', f:'AI'}]},
  {a:'4주제 통합 방향판', v:[
     {d:'250124', id:'1Gl_tWF-S6HivGdXKukGPDtC4Z4snlxUH', f:'AI', note:'A01·A08·A03와 공유'},
     {d:'241228', id:'1NBFAO6JdIGLyFkqI6UcagR5fuEHDI7MO', f:'AI'}]},
]},
{id:'A08', c:'A', n:'정수기', d:'정수기 방향 안내', x:['A01','A07'], as:[
  {a:'정수기쪽 보드 방향 안내', v:[{d:'250714', id:'1gwojCb4GGPo3je4E6rS4zWkgswvu-ufY', f:'AI'}]},
  {a:'4주제 통합 방향판', v:[
     {d:'250124', id:'1Gl_tWF-S6HivGdXKukGPDtC4Z4snlxUH', f:'AI', note:'A01·A07·A03와 공유'},
     {d:'241228', id:'1NBFAO6JdIGLyFkqI6UcagR5fuEHDI7MO', f:'AI'}]},
]},
{id:'A09', c:'A', n:'영업시간 · 마감 · 휴무', d:'영업시간 · 마감 · 조기마감 · 정기휴무 · 브레이크타임', x:['A12','D04','A16'], as:[
  {a:'영업시간 · 반려동물 안내', v:[
     {d:'250902', id:'1yaSE7XTQQlfRUWTYH5BsaPig6hJGCpp-', f:'AI', note:'★A12와 공유'},
     {d:'250721', id:'1yN4DZQV4sH3sBaHKzbOPjwXvb-FuHSXn', f:'AI'},
     {d:'241226', id:'1BTqx9IbMFSD9MaEumrSrTGUu2LDLg3MF', f:'AI'},
     {d:'241221', id:'1OhkGM-EOfB2lGzkCW41lXaL0vIvjsSEp', f:'AI'}]},
  {a:'영업 마감', v:[
     {d:'260718', id:'', f:'A4', after:'print/closing-notice.html', note:'★애프터 · 빨강 제거·그린 절제·오동통. 기존 251220 리디자인'},
     {d:'260215', id:'1YlJbFpjm8Sc7pGZGnrgU7Bub6fDFGBKQ', f:'코팅', note:'A4 가로 코팅용'},
     {d:'251220', id:'16fhNTELsv3bbBj0rHmbTVsvzetqhN7pu', f:'A4'},
     {d:'240428', id:'19-Sypm7zXw25tOrICuVl8S_thppJSPkL', f:'A4'},
     {d:'240319', id:'1v0DLPjFhD78w7L-xHZP1k4lop1kVmYEf', f:'A4', pdf:'10BTW8bslZB0UWzfUA9x5pRX_fWcrxR9D'}]},
  {a:'수요일 정기휴무', v:[
     {d:'250817', id:'1ZI3D1LxxqzQ250DeCp857-x5Lu42A5XQ', f:'AI'},
     {d:'240807', id:'1OKOvcBzlR3flpWIYiIGeQmZUp8LSuOt3', f:'AI', note:'글씨깸본 별도 존재'}]},
  {a:'조기 마감 안내', v:[{d:'240928', id:'1KwEBM9mzgc9m9-5S-S-a3gSxNCXxnHzQ', f:'AI'}]},
  {a:'브레이크타임 안내', v:[{d:'230409', id:'1qjWpE1uyXEXkmrwZFVqEtcv8efiIPAI1', f:'AI'}]},
]},
{id:'A10', c:'A', n:'금연 · 흡연', d:'금연구역(법정 표지) · 흡연구역', x:['A11','A03'], as:[
  {a:'흡연구역 안내', v:[{d:'260522', id:'1HMtgRFA1S_lLqMZGvo8-6vV9tiqF75FM', f:'AI', note:'B안 애프터가 이 흡연구역을 전제로 함 — 세트로 맞출 것'}]},
  {a:'금연구역 안내 (법정 표지)', v:[
     {d:'260717', id:'', f:'A4', after:'after/signage-nosmoking.html', note:'★애프터 시안 — 법정 문구 추가 · 2안(법정/야외석)'},
     {d:'240603', id:'1PWyX75fbjymgrepPDH26uf7nJwdsG7no', f:'A4', note:'⚠법정 필수 문구(과태료 고지) 누락 · 4종 변형 · 빨강이 타이포까지 침범'},
     {d:'231111', id:'1x4PO4D80AfbLA7H9sdZ2WaecZasyVh6B', f:'A4', pdf:'1l8f5Dy_xv0uish2DUw32HBWgzT1M4rzQ'}]},
  {a:'화기물 보관 구역 경고 (분리 필요)', v:[{d:'240603', id:'1PWyX75fbjymgrepPDH26uf7nJwdsG7no', f:'A4', note:'⚠금연구역 파일에 섞여 있음 — 위험도가 달라 별도 표지로 분리해야 함'}]},
]},
{id:'A11', c:'A', n:'안전 · 주의', d:'미끄럼 · 벌/해충/풀독 · 발빠짐 · 출입금지', x:['A13','A14','A10'], as:[
  {a:'벌 · 해충 · 풀독 주의', v:[
     {d:'250605', id:'1MGOubBHIRseccldRlvrEm3HfgylG7fIp', f:'AI'},
     {d:'240528', id:'1wCNnFce4tcdoMlPH8gXr301YTkuIqjbJ', f:'AI'}]},
  {a:'발빠짐 · 해바라기 꺾기 주의', v:[{d:'240802', id:'1Sf-CdX_zTOMOIxjnCLPbwuGdulGSjTOn', f:'AI', note:'★A13과 공유'}]},
  {a:'관계자외 출입금지', v:[
     {d:'240603', id:'1donj3mp9jCBNf6-Ai9qJ3GxZH1po7gjh', f:'AI'},
     {d:'231111', id:'1AxNQ6yQ9xWmqYoZwQc3j7nYUwhEKnKKl', f:'A4', pdf:'1Zxcc_8JsddjtkhwcSiRnxI1vS7Xm06Ed', note:'호수집'}]},
  {a:'위험 접근금지 (새단장중)', v:[{d:'241019', id:'1_lylnEUvZI27i2ezOFdguGyEKRgGChf0', f:'AI', note:'A14와 공유'}]},
  {a:'미끄럼주의', v:[{d:'231130', id:'1pfGazI4ZF4n89-N5qDN5hdmuNDLRO5tN', f:'AI', note:'발주용 · 편집용 쌍(1OaLSH2hfISGL4hZ26d3R5h9yMBcMuf41)'}]},
]},
{id:'A12', c:'A', n:'반려동물', d:'반려동물 동반 안내', x:['A09'], as:[
  {a:'반려동물 안내', v:[{d:'240216', id:'1hzYEi3USgQRUiF_WcM4NtX_gMJ1TvWRV', f:'AI'}]},
  {a:'영업시간 · 반려동물 통합본', v:[{d:'250902', id:'1yaSE7XTQQlfRUWTYH5BsaPig6hJGCpp-', f:'AI', note:'★A09와 공유 · 최신 4버전'}]},
]},
{id:'A13', c:'A', n:'사르르뷰 · 농사', d:'호밀 · 메밀 · 코스모스 · 해바라기 파종/개화', x:['A11','A15'], as:[
  {a:'사르르뷰 공지', v:[
     {d:'260522', id:'13P5T7O9saNjr1WecuLFuZbbTANANm4bp', f:'AI', note:'호밀·코스모스'},
     {d:'251102', id:'1obPPHi8bHp3_kr_Vv9YVuX_obulzXxmd', f:'A4', note:'호밀 파종 소식 · 139MB'},
     {d:'250825', id:'1ktFJWkgSa_nIBNZ9q84y7RG_OtJs0jwI', f:'AI', note:'코스모스·해바라기·메밀'},
     {d:'250425', id:'1YDqAhjARGwMwGhA4XIgVBzMRiwXLGYBu', f:'AI', note:'호밀·메밀·코스모스'}]},
  {a:'메밀꽃밭 방향 안내', v:[{d:'240914', id:'1aAJAkse58p9KE0RunMJeE59-bYi6t8mw', f:'AI', note:'A15와 공유'}]},
  {a:'해바라기 파종 안내 (폴더)', v:[{d:'—', id:'1hoPfkvzPED1pTe_zUAPebrJWuDIJjNc9', f:'폴더', fd:1}]},
]},
{id:'A14', c:'A', n:'울타리 · 공사', d:'공사중 · 새단장 안내', x:['A11'], as:[
  {a:'울타리 공사중 안내', v:[{d:'260522', id:'13qXJYm6O4Zau6lDdQFO5ncotb78weM2d', f:'AI'}]},
  {a:'위험 접근금지 (새단장중)', v:[{d:'241019', id:'1_lylnEUvZI27i2ezOFdguGyEKRgGChf0', f:'AI', note:'A11과 공유'}]},
]},
{id:'A15', c:'A', n:'위치 · 길찾기', d:'위치 종합 · 지도 QR', x:['A04','A13','A16'], as:[
  {a:'위치 안내 종합', v:[{d:'231028', id:'154D9VoE_9iMbpdj8IW3Pva_NpnxaeR6o', f:'AI'}]},
  {a:'네이버지도 QR', v:[{d:'—', id:'1y84mcKOoQ3Aj_QqvdaLz1R2ucqoG7kJE', f:'PNG', note:'인입 자산'}]},
]},
{id:'A16', c:'A', n:'공간이용 종합', d:'★통합본 — 여러 주제를 한 장에 모은 것', x:['A01','A03','A06','A15','A09'], as:[
  {a:'공간 이용 안내', v:[
     {d:'251214', id:'1OARwwWPDncQi-u_EOS1KPAniaTm7dSOJ', f:'AI', note:'113MB'},
     {d:'250605', id:'1MFOZjWQD3-auzknbJecfW4T0H9TICj9w', f:'AI', note:'77MB'}]},
  {a:'주말 안내 (실내·포장·야외석·이동방향)', v:[{d:'260208', id:'1Ds3nxTO7PZVrWPRSuBsICJjet75RWUr0', f:'AI', note:'★3주제 걸침'}]},
  {a:'이용안내 · 대기안내', v:[{d:'241104', id:'17AAOBrPfUJH3qHFUrrZ8zaDkUiXeiDr1', f:'AI', note:'A06과 공유'}]},
]},
{id:'A17', c:'A', n:'환영 · 응대', d:'환영문구 · 카운터 응대', x:['A05','F02'], as:[
  {a:'질문은 카운터 쪽으로', v:[{d:'250724', id:'1twZwBVEpEUhKBbRaEFRv5sMfH05dWl7X', f:'AI'}]},
  {a:'환영문구 캐릭터', v:[{d:'250605', id:'1-Ns8Q7erueplS8aSuIAQkSRp8rld2dmo', f:'AI', note:'F02 마스코트 활용'}]},
]},
{id:'A18', c:'A', n:'아이스크림 기계 상태', d:'고장 · 제조시간 · 부분가동', x:['A06'], as:[
  {a:'기계 고장 및 제조 시간 안내', v:[{d:'241027', id:'1zBhQUZy3tCMzQM5O_Rs3Vf1b8Lo6P166', f:'AI'}]},
  {a:'50% 가동 안내', v:[{d:'230730', id:'13bsQBE_7HqYbLyV3QbE7ZDMNZ9AUayDI', f:'AI'}]},
  {a:'기계 고장 안내 (폴더)', v:[{d:'250401', id:'1x3crG92CUIxYPorBUggsKydxet-0shx4', f:'폴더', fd:1}]},
]},
{id:'A19', c:'A', n:'빵 데우기(리베이크) 안내', d:'발뮤다 토스터 · 식은 빵 재가열 안내 카드', x:['B02'], as:[
  {a:'빵 데우기 안내 카드 (RÖDALM 액자용)', v:[{d:'260718', id:'', f:'100×150', after:'print/balmuda-rebake-guide.html', note:'★신규 애프터 · 세로 100×150mm · 오동통 · 포스트잇 3개(안내+4단계+화상주의) 통합. 원본 포스트잇 대체'}]},
]},

// ── B. 메뉴 · 가격 ──────────────────────────────────────────
{id:'B01', c:'B', n:'메뉴판', d:'본판(두장) · 메뉴 이미지 · 타이틀 요소', x:['A05','D04','B02'], as:[
  {a:'메뉴판 (두장)', v:[
     {d:'260713', id:'1ADyMjlaDi5uqmApB6n6eg_ABJrpZ_jpC', f:'A4', note:'밀크티 추가 · 최신'},
     {d:'260418', id:'1jJzBcaNGJ3uqSaMyzNG--Px2__iICsjT', f:'A4', pdf:'1SC5nei1XWKrAmi6amSri2ejotu4AcP1D', note:'스노우몬X 디카페인O'},
     {d:'260321', id:'1lqWVRK6Quyl_PduyLQkxIhjQVwVOEdh8', f:'A4', note:'디카페인 추가'},
     {d:'251214', id:'1Pfgqxe98Hx2V7hhVVZYMXJK2HKKIYnYZ', f:'A4', note:'스노우몬 추가'},
     {d:'250508', id:'15c0h5ULwxBmatjQiGrqB2YrfG7EFt5zd', f:'A4', note:'밀크티뺌·사진추가'},
     {d:'250102', id:'1WAgLzjbyVtRe1JH276QnRI8vSLo1XL2o', f:'A4', note:'백업'},
     {d:'241226', id:'1FNFQwrC1QmL4SHkcSOsTWy1dXfKmKHuP', f:'A4', note:'백업'},
     {d:'240706', id:'1UsnzAJXzWxG1_HVj0oByrTUnp76pyI5K', f:'A4', note:'백업'},
     {d:'240329', id:'1nSW3c-vJDY_TcIFKuRKdNQGJ3HZfQ5HQ', f:'A4', note:'로투스 추가'},
     {d:'240319', id:'1G994zak1YkZ0qoM7a1p0447on3fyRWgF', f:'A4', pdf:'1zeU5UyFGz33Bv748fwQAUCQWpJX9os_W'},
     {d:'240111', id:'1npJ-wOLyV0449GFFfjN7lO2Y6WXZsU8I', f:'A4', pdf:'1440akb-QCy7juiEZFKRCheaQVonWLNiL'},
     {d:'231221', id:'1dGd0r8b5_UfKCju-kg27HfJdolFd0nYn', f:'A4', pdf:'1PQh4MInv5UtaUXGhAxvSLqS3gQl8kRQI'},
     {d:'231028', id:'1uGonQjt8dET1kJwaSTyyw6xd3aNC_yu1', f:'A4', pdf:'1X8p-mWI-AgRvjT7lMzXn9SdyIBfzC0do'},
     {d:'230419', id:'1y_6sGbDNKTxUJffiyRMxayzoqhU-btqI', f:'A4'}]},
  {a:'메뉴 이미지 인쇄용', v:[{d:'250923', id:'1IWi4tWUQo8DkgOngdzucz93SY0yaW2N7', f:'A4', note:'161MB · 사진 임베드'}]},
  {a:'메뉴 · 안내 타이틀 요소', v:[{d:'251102', id:'1aZ3ZigA9fp0oCHs4vt6ryC-ZJ_GD31u9', f:'AI', note:'타이포 요소 모음 가능성'}]},
  {a:'메뉴 구성 (시트)', v:[{d:'250102', id:'11VsBGuam08EJQtM5UKbcffM4Ihh3QPzRXZ9njbuJgpQ', f:'Sheet', fd:2}]},
]},
{id:'B02', c:'B', n:'개별 상품 안내', d:'밀크티 · 카이막 · 디저트', x:['B01'], as:[
  {a:'밀크티(잔) 구매 안내', v:[{d:'240708', id:'1AIyLu3ZdizOTdGyqI2fueMrYluqAfNlk', f:'AI'}]},
  {a:'카이막 포장 · 빵 안내', v:[{d:'231028', id:'1mbTIpb3oSrmUzlJYDuHunDifLpe5eZCk', f:'AI', note:'파일명에 “폰트수정” — 서체 단서'}]},
  {a:'디저트 안내', v:[{d:'230406', id:'13x-uELUcp3oLC4C2OP9xh94V41nbXahc', f:'AI', note:'날짜 접미사 없는 예외'}]},
]},
{id:'B03', c:'B', n:'굿즈 가격표', d:'굿즈 · 우유 비누', x:['E03'], as:[
  {a:'굿즈 가격표', v:[
     {d:'260614', id:'14gLR6XqV46LFzmXbiwj0vMR8o_El9w0X', f:'AI', note:'우유 비누'},
     {d:'240914', id:'16xI9DYpdAeyvJl5VX6rj5Y0r6H4ZDyp5', f:'AI'},
     {d:'231111', id:'10rMLuZOxLK7FsJsbf45VVwkkCRM28MqO', f:'AI', pdf:'1qnFVL6W6xPnSMK7TFMw2a2_gkZFbSXAk', note:'백업'}]},
]},
{id:'B04', c:'B', n:'봉투 · 와이파이', d:'★두 주제가 한 파일에 묶여 있음', x:['A16'], as:[
  {a:'봉투 가격 · 와이파이 안내', v:[
     {d:'250522', id:'1IGqLbq4ZAXWIsjyGNw4n3YFG9Tk6FJ3q', f:'AI', note:'이미지 추가 · 68MB'},
     {d:'240224', id:'1Df_1yLUit8QP4N6k9hL32dSbJtAKIoMP', f:'AI', pdf:'1VGBMODpEjR5mpDnLFIGac1ONp9XyohUs'},
     {d:'231028', id:'12fwRtENc99YZC-PeX--B0c2dliTUdyi5', f:'AI'}]},
]},
{id:'B05', c:'B', n:'가격 인상 안내', d:'⚠정본 이원화 — 두 폴더에 다른 파일 ID', x:['A09'], as:[
  {a:'가격 인상 안내 (공간이용 안내 트리)', v:[{d:'241226', id:'1sMHPjsuoBnFrc3jvlMWcxY6uUtOUHNqm', f:'AI', note:'⚠아래와 별개 ID'}]},
  {a:'가격 인상 안내 (이벤트·공지 트리)', v:[{d:'241226', id:'16rSmmGhEey8wBmN6mPPBpoyC94r060xU', f:'AI', note:'⚠같은 날짜 · 다른 ID — 정본 확인 필요'}]},
]},

// ── C. 패키지 · 라벨 ────────────────────────────────────────
{id:'C01', c:'C', n:'제품 라벨', d:'목장 우유 · 요거트 · 꾼치즈 · 밀크티 · 아이스크림 베이스', x:['C02'], as:[
  {a:'목장 우유', v:[{d:'230908', id:'1eGRr56xzJxMNi6Jje1IOBNPlTuUIzzNm', f:'폴더', fd:1}]},
  {a:'목장 요거트', v:[{d:'230908', id:'1jrN7aD3BlhCehrrPto0DhSngDI3FXz-N', f:'폴더', fd:1}]},
  {a:'꾼치즈', v:[{d:'230908', id:'1MUIh14E6v48aNxyMt5B_Qnt5sfr28M_7', f:'폴더', fd:1}]},
  {a:'밀크티', v:[{d:'230105', id:'1N6SZJ1LvrZaaBOkCDb_dv8RU84Oo1FfM', f:'폴더', fd:1}]},
  {a:'아이스크림 베이스', v:[
     {d:'240613', id:'1EwhJ4ei-RacjesC5S2CibSqq95ZSIpSF', f:'120×150', note:'4000ml'},
     {d:'240613', id:'17qjQfB6bkPfhdx87Ol_VGHIagULHCCsu', f:'120×50', note:'150ml'}]},
]},
{id:'C02', c:'C', n:'소비기한 라벨', d:'현장 출력용 A4 시트 — 매니저 공유', x:['C01'], as:[
  {a:'오레오 쿠키', v:[{d:'260630', id:'1zfMb3ILe6yVgrJD2U6jTVYvV4la1XCkG', f:'A4', pdf:'1g2AqcRG2F3MeIiNcRwflusw6D-mm9c5J'}]},
  {a:'오레오 토핑', v:[{d:'260630', id:'1AMYK8gwiHYHdTbwqhsvd5htu4jNZEpnI', f:'A4', pdf:'1VSFHYf7M2ePKw55DIoD8IRB0sKaUKhXu'}]},
  {a:'콩고물 토핑', v:[{d:'260630', id:'1J-ifGwoRSSVoA67UPVcyXtk7piob18bT', f:'A4', pdf:'1a_hOV5_kGpunJzeQ-ZhdRa6QH_ofDEjC'}]},
  {a:'밀크티 소비기한', v:[{d:'240630', id:'1JGty__gtRBCb_ir0r4KkdKgnrEWobcA2', f:'65×40', note:'인쇄용 · 편집용 쌍 존재'}]},
]},
{id:'C03', c:'C', n:'브랜드 스티커 (칼선)', d:'★기존 칼선 = 재사용 자산. ⚠원본 소유가 kbl0226 계정', x:['F01'], as:[
  {a:'모양 스티커 · 보냉백 (대형)', v:[{d:'230710', id:'1MzQiS5Axn5HpPhVLKAp1Vc_nJ8TAU7m3', f:'88×64'}]},
  {a:'모양 스티커 · 컵뚜껑', v:[{d:'221219', id:'1ZgrX7LhcdkmsC8uzBtgokxbKUkkl58E1', f:'57×40'}]},
  {a:'모양 스티커 · 서비스', v:[{d:'—', id:'1CBlBHwyaspMetmN16LTw446NO5FqvnHd', f:'45×32'}]},
  {a:'스티커팩 · 3종 모양 (대형)', v:[{d:'231028', id:'1MKprxowMsUIQy7uI67JIYuEo5IgxQIy1', f:'31×44'}]},
  {a:'스티커팩 · 텍스트', v:[{d:'231021', id:'1vf4ijkMVl68aFkxVsD_zoEv1_ynFSEad', f:'49×76'}]},
  {a:'스티커팩 · 미니모양 6개입', v:[{d:'—', id:'1Ogti0aiCrcGUlitQvIUq9EDccFdcmVdU', f:'59×67'}]},
  {a:'스티커팩 · 미니모양 4개입', v:[{d:'—', id:'1dQn4XU2mHxKfzbNRB2slyU4vDqqSdz7e', f:'59×44'}]},
  {a:'스티커팩 · 다용도', v:[{d:'220417', id:'1lO4EcJUK5u-PpmNuxV0P1okRvQJqJgjx', f:'40×40', note:'아카이브 최초 파일'}]},
]},

// ── D. 홍보 · 캠페인 ────────────────────────────────────────
{id:'D01', c:'D', n:'리플렛', d:'★브랜드 언어(고소·신선·담백)의 원천', x:['D02','F04'], as:[
  {a:'사르르 리플렛', v:[
     {d:'220417', id:'1a6n0qb-6lEWuae7CssJXPt8BNy7w6zes', f:'AI', pdf:'1BIk_SDaMiVhu3IrTjZWz-xcWKlfIqiwu', note:'원본'},
     {d:'220417', id:'1OZv4ycGCfIaxB9FjPUQzsG0on-qteLNB', f:'AI', note:'글씨깸 — 발주본(같은 버전의 파생)'}]},
]},
{id:'D02', c:'D', n:'행복이 사르르', d:'슬로건 레터링 · 포스터 · 대형 일러스트', x:['F02','D01'], as:[
  {a:'슬로건 레터링 + 캐릭터', v:[{d:'250316', id:'1o3BpHpwJ-DWNpPhOqEM2TvTro29UwKVM', f:'AI'}]},
  {a:'행복이 사르르 포스터', v:[{d:'231028', id:'1Kw9XdPHiGIQGlUCJRZcp3EVc8SguzTBp', f:'A4', pdf:'1pR70hlUrfImb60xtmrmQwyZ5ku6sBYlL', note:'풀컬러 텍스처 일러스트'}]},
  {a:'사르르 (대형 일러스트)', v:[{d:'230605', id:'1oY0ly_7ukgE4_jcCGpygWfe05Ou5d5pb', f:'PDF', note:'45MB'}]},
]},
{id:'D03', c:'D', n:'이벤트 · 할인', d:'리뷰 · 빵 추가 · 상품 할인', x:['B03','D05'], as:[
  {a:'리뷰 이벤트 포스터', v:[{d:'240405', id:'1ZEUNldR79TpvuzJ19OxtsmRSxh_Xl3L8', f:'A3', pdf:'1lPW-BGbyG5SfwC2Q7zXrfVkpEVW_Q6Ec', note:'A3는 아카이브 유일'}]},
  {a:'빵 추가 이벤트', v:[{d:'240507', id:'1QVZleWhoxtUYH4o3-9QTaoWX575cIg7q', f:'AI'}]},
  {a:'목장 우유 할인', v:[{d:'240621', id:'1Atc-59ZlNuRS_GxtxnYbfyKpCaZiRZ0O', f:'AI'}]},
  {a:'플레인 요거트(150ml) 할인', v:[{d:'240621', id:'15SFdbCq_T9vyrDpdQ5lJtGbjhpczNwaN', f:'AI'}]},
  {a:'밀크티 할인 이벤트', v:[{d:'231217', id:'1KrI8OuytPj29yPBW5G07WdDs6ijYb0D5', f:'AI'}]},
]},
{id:'D04', c:'D', n:'연휴 안내', d:'추석 · 신정 · 임시휴무 (X배너·A4·인스타·축소운영)', x:['A09','B01'], as:[
  {a:'신정 연휴 안내', v:[
     {d:'231229', id:'1V0Bt2TCZAkpjkNMpIqo1zvMIJSQZLdnt', f:'A4', note:'축소운영 메뉴판 — ★B01과 공유'},
     {d:'231225', id:'1IiKJf3AwvOUOG0Y_0yGFW4BGBK3tssKI', f:'AI', note:'매장내'},
     {d:'231221', id:'1nn0iHF6jimREvE0HmThFPxxbbbm7WUMF', f:'디지털', note:'인스타 · 68MB'},
     {d:'230921', id:'1KgfP5TCa7vQdQGmE9khRexK5WzWPCYdg', f:'X배너', note:'글씨깸본 별도 존재'}]},
  {a:'추석 연휴 안내', v:[
     {d:'230930', id:'1aw7YPmawvHHnPt3ZDuoQY1wQSZStT342', f:'A4', note:'축소운영 메뉴판 — ★B01과 공유'},
     {d:'230921', id:'1blhqKmE0mh4A4x0Dt2kgGBo14JHz6cY7', f:'X배너', note:'발주용 글씨깸본 별도'},
     {d:'230921', id:'1uyMBOGUW7aN_bzQyInCMH-rRnm8azoyY', f:'A4'},
     {d:'230921', id:'1ACJWbSty3ETwBDybPMCCVnfKHUAhJDrG', f:'디지털', note:'인스타 · 167MB'}]},
  {a:'임시 휴무 안내', v:[{d:'240310', id:'1bDODHAv9e_nd5y6RsCEfvScdZ0V6LMxP', f:'AI'}]},
  {a:'테이크아웃 데이 안내', v:[{d:'230409', id:'10H1tEgopfgqqJr0veQECwOB13YSgIJFk', f:'AI', note:'파일명 오타: 데이크'}]},
]},
{id:'D05', c:'D', n:'SNS · QR', d:'인스타 · 리뷰 QR · 시즌 콘텐츠', x:['D03','E01'], as:[
  {a:'크리스마스 인스타 콘텐츠', v:[{d:'221225', id:'1hULNIi62UV247fNI9F6i4AVyI3uRXWJS', f:'디지털', note:'E01과 공유'}]},
  {a:'인스타그램 QR코드', v:[{d:'230105', id:'1eIMw_A0GICgY57dMavrArWuWzE8Jq655', f:'JPG', note:'인입 자산'}]},
  {a:'영수증 리뷰 QR', v:[{d:'240405', id:'1XhNnnJ3Vu01eNAo18txtX3txUtJ55NyR', f:'SVG', note:'아카이브 유일 비-AI 벡터'}]},
]},

// ── E. 공간 조형 · 시즌 ─────────────────────────────────────
{id:'E01', c:'E', n:'크리스마스', d:'포맥스 글씨·캐릭터 · 콘 조형', x:['D05','F02'], as:[
  {a:'크리스마스 캐릭터', v:[{d:'251030', id:'1FxK7MgHqzZWlHXYv9CDjcsfj_h1jInpt', f:'AI', note:'2025 에어조형물 제작용'}]},
  {a:'포맥스 글씨와 캐릭터', v:[{d:'241121', id:'1IfFhux4psnD7IKlSj6Xzc6aqrH53oTdH', f:'포맥스', note:'원본'}]},
  {a:'포맥스 글씨만', v:[{d:'241121', id:'1yK8NsBfmuld0o5GOqG-UNovNxplaFNfM', f:'포맥스'}]},
  {a:'캐릭터 포맥스 · 콘', v:[{d:'241121', id:'1FLqfQGTKlxfFJUt42K83_Y2w6v3enok9', f:'50×30', note:'선깸(2) — 커팅 발주본'}]},
]},
{id:'E02', c:'E', n:'에어 조형물', d:'⚠외주·비용 게이트 — 견적·거래처 이력 존재', x:['E01'], as:[
  {a:'2025 제작 · 2D 시안', v:[
     {d:'251013', id:'1zCsvl2jKX65QZYDt63AWcuIoqrwv0ZfM', f:'조형물', note:'2D 논의'},
     {d:'251013', id:'184agM_s1O1WCTWVlH2gvybENrgE_tdiG', f:'PNG', note:'2D 최종 시안'}]},
  {a:'2025 천갈이 · 견적서', v:[{d:'250929', id:'1UlUobtBDXY0nODrTpQIyyjv2B__1tKHn', f:'PDF', note:'⚠비용 문서'}]},
  {a:'2023 제작 · 견적서', v:[{d:'231221', id:'1Zu_MvQWtL0tpDGVVw2HdDSlDeEFaRuVP', f:'PDF', note:'⚠비용 문서 · 거래처/렌더링/완성사진 폴더 동반'}]},
]},
{id:'E03', c:'E', n:'맘스보드 · 게시대', d:'게시 매체', x:['B03'], as:[
  {a:'맘스보드 포맥스', v:[{d:'240919', id:'1JJu_yv2GHO6uAd4Y61Pqpo5Cahwd7KgB', f:'포맥스'}]},
  {a:'게시대 콘텐츠 스케치', v:[{d:'250421', id:'1qiyAmeMsHeTMXu0ROi1M0kPXuy4yMYTM', f:'AI', note:'수정중 — 미완'}]},
]},
{id:'E04', c:'E', n:'입간판 · 거치대', d:'A자 입간판 · A5 거치대', x:['F01','A09'], as:[
  {a:'사르르 입간판 · 휴식중', v:[{d:'241114', id:'1ITjk7OajIYcmoJNtp-yaNWujawc59-Ah', f:'입간판'}]},
  {a:'로고 · 캐릭터 on A5 거치대', v:[{d:'240914', id:'1bZr1D8vonq_RbfpkN8CAbibL_MIZCj3I', f:'A5 거치대', note:'★F01·F02와 공유'}]},
]},

// ── F. BI · 브랜드 코어 (정본) ──────────────────────────────
{id:'F01', c:'F', n:'로고 · 락업', d:'메인 · 조합형A/B · 워드마크', x:['F02','F04','C03'], as:[
  {a:'메인로고', v:[
     {d:'250825', id:'1iun6usCzH7_jgsB1nvQqksCccy-k-_Xn', f:'PNG', note:'인쇄용 · RGB 정본 #38528a 실측 출처'},
     {d:'220531', id:'1mZPBUf65km64F2NWyp6H8mG-2WVgi7PD', f:'AI', note:'인쇄용'}]},
  {a:'조합형로고 A', v:[{d:'220531', id:'1cTzz6X0RziAqeH4n4Tz1U9gxCn5vGOdy', f:'AI'}]},
  {a:'조합형로고 B (서클 엠블럼)', v:[{d:'220531', id:'1bjwNOOYDVyby5QPjfbG8vtPkdofUW7mn', f:'AI'}]},
  {a:'워드마크 로고', v:[{d:'220531', id:'1zmTN3mBB3vucrogcNenfv5XFrKnt_HtQ', f:'AI'}]},
  {a:'로고 테스트 (사르르 레터링 2안)', v:[{d:'260329', id:'1UK4dTjzyddd_qFqDuP-nauZZK9GxOIef', f:'AI', note:'레터링 다듬는 중'}]},
  {a:'로고와 배경 (인스타 감성)', v:[{d:'240605', id:'1IBaOszuA5d2_6GoMzcOfvybzqYPWY80p', f:'AI', note:'53MB'}]},
]},
{id:'F02', c:'F', n:'마스코트 · 캐릭터', d:'젖소 3종(콘·우유팩·스쿱) + 파생', x:['F01','D02','E01','A17'], as:[
  {a:'젖소 3종 (메인로고 내장)', v:[{d:'220531', id:'1mZPBUf65km64F2NWyp6H8mG-2WVgi7PD', f:'AI', note:'★F01과 동일 파일 — 마스코트가 로고에 내장'}]},
  {a:'행복이 사르르 캐릭터', v:[{d:'250316', id:'1o3BpHpwJ-DWNpPhOqEM2TvTro29UwKVM', f:'AI', note:'D02와 공유'}]},
  {a:'크리스마스 캐릭터', v:[{d:'251030', id:'1FxK7MgHqzZWlHXYv9CDjcsfj_h1jInpt', f:'AI', note:'E01과 공유'}]},
  {a:'환영문구 캐릭터', v:[{d:'250605', id:'1-Ns8Q7erueplS8aSuIAQkSRp8rld2dmo', f:'AI', note:'A17과 공유'}]},
]},
{id:'F03', c:'F', n:'서체', d:'Fredoka One(OFL·무료) · Sandoll 오동통(유료 구독)', x:['F04'], as:[
  {a:'Fredoka One — 영문 브랜드 서체', v:[{d:'—', id:'1S-HSIkcJb3uExCwa_4zBKcHElWXGFi2C', f:'TTF', note:'SIL OFL 1.1 · Regular 단일 웨이트 · 한글 미지원'}]},
  {a:'OFL 라이선스 원문', v:[{d:'—', id:'1JXIK3TGgs9xBJIVmB7BPEIDubGl0eYra', f:'TXT', note:'폰트와 함께 보관 — 좋은 관행'}]},
  {a:'Sandoll 오동통 — 한글 브랜드 서체', v:[{d:'—', id:'', f:'유료', note:'★확정(유저 2026-07-17) · 산돌구름 구독 필요 · Basic/Bling/Fluffy/Holiday/Journey/Life 6스타일 · 매장 사인의 그 동글동글한 글자'}]},
]},
{id:'F04', c:'F', n:'브랜드 매뉴얼', d:'★정본 A — 2021 STUDIO FLAT FLAG', x:['F01','F02','D01'], as:[
  {a:'브랜드 디자인 보고서', v:[{d:'211124', id:'1X9GbuaJ-boIMPx6FQnqxS-2TryvwekmU', f:'PDF·13p', note:'★정본 A · 사인/명함/패키지/굿즈 적용안 수록'}]},
  {a:'brand_manual', v:[{d:'220417', id:'1R8BEcAuGl0i5UtG_sQ0NytE3GLko4eNZ', f:'AI', note:'30MB · 다운로드 한계 초과'}]},
]},
{id:'F05', c:'F', n:'명함', d:'매장 명함 · 발주 양식', x:['F01'], as:[
  {a:'매장 명함', v:[{d:'250313', id:'1HcGah4Typ78vlZKYfl9UJvt9XCOhM63d', f:'AI', note:'디자인본'}]},
  {a:'매장 명함 (발주 양식)', v:[{d:'250313', id:'1gkpCxrG8a96q9oZ0XwHrUWxpEuFQSxvf', f:'AI', note:'업체 템플릿본 — 같은 버전의 파생'}]},
]},
];
