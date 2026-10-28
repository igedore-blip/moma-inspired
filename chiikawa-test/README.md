# 나의 치이카와 타입은?

비공식 팬 제작 오락용 성격 테스트. HTML/CSS/JS와 `data.json`만 사용합니다. 캐릭터 이미지는 사용하지 않았습니다.

## 조사하여 적용한 일반적 특징
- 짧은 선택형 질문과 진행 상태로 응답을 돕는다.
- 답변별로 여러 결과 유형에 점수를 부여하고 최고점 유형을 표시한다.
- 결과에 설명과 다시 시작 기능을 제공한다.
- 가상 데이터와 편집 가능한 대시보드를 별도로 둔다.

참고: [Jotform 성격 퀴즈 구성 안내](https://www.jotform.com/blog/how-to-make-a-personality-quiz/), [Opinion Stage 점수 배분 안내](https://help.opinionstage.com/en/articles/10264857-how-to-configure-point-allocations-in-personality-recommendation-quizzes). 이 앱의 질문과 점수는 독자적으로 작성했으며 심리학적 타당성을 검증한 진단이 아닙니다.

## 데이터 관리
`data.json`은 기본 가상 데이터입니다. 대시보드에서 유형 설명, 가상 응답 수, 질문과 선택지 문구를 수정하면 해당 브라우저의 `localStorage`에 저장됩니다. JSON 내보내기와 가져오기를 지원합니다. 점수 매핑을 고치려면 내보낸 JSON의 `scores`를 수정해 다시 가져오세요. 서버나 데이터베이스는 사용하지 않습니다. 다른 방문자에게 편집 내용이 공유되지 않습니다.

요청에는 '10개 타입'이라고 적혀 있으나 나열된 이름은 11개여서, 누락 없이 11개를 포함했습니다.
