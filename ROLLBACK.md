# 롤백

Git으로 특정 시점으로 되돌리기.

## 체크포인트 저장

```bash
git add -A
git commit -m "체크포인트: 작업 설명"
```

## 되돌리기

| 목적 | 명령 |
|------|------|
| 마지막 커밋으로 (미커밋 변경만 취소) | `git checkout -- .` 후 `git clean -fd` |
| 이전 커밋으로 | `git log --oneline` 으로 해시 확인 후 `git reset --hard <해시>` |

- `git checkout -- .`: 추적 중인 파일을 마지막 커밋 상태로 복구
- `git clean -fd`: 추적 안 하는 새 파일/폴더 삭제
- `git reset --hard <해시>`: 해당 커밋 이후 이력 제거 (신중히 사용)
