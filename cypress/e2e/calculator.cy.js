// 사용자에게 가장 중요한 기능은 연산의 결과. 
// 그래서 우리는 연산 결과 값이 잘 보여지는지 테스트
// known to unknown

// - [ ] 2개의 숫자에 대해 덧셈이 가능하다.
// - [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [ ] 2개의 숫자에 대해 곱셈이 가능하다.
// - [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

describe('계산기 앱 테스트', () => {
  it('계산기 페이지 접속', () => {
    cy.visit('../../index.html')
  })

  it('display에 기본적으로 숫자 0이 표시된다', () => {
    
  })
})