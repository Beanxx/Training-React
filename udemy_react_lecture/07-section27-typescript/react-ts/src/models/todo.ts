// 데이터 모델
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }

}

export default Todo;

// 1. 미리 프로퍼티 정의
// 2. 해당 프로퍼티에 어떤 타입을 가진 값이 저장되는지 작성