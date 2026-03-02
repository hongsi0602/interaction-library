# Supabase로 업로드 공유 설정

이 문서대로 하면 **업로드한 항목이 모든 방문자에게** 보입니다 (localStorage 대신 Supabase에 저장).

## 1. Supabase 프로젝트 만들기

1. [supabase.com](https://supabase.com) 로그인 후 **New Project** 생성
2. **Project Settings** → **API** 에서 다음 두 값을 복사:
   - **Project URL**
   - **anon public** key

## 2. 테이블 생성 (업로드 저장용 DB 테이블 만들기)

Supabase에서 “업로드한 데이터를 어디에 저장할지”를 정해주는 단계입니다.

1. **Supabase 대시보드** 왼쪽 사이드바에서 **SQL Editor** 를 클릭합니다.
2. 오른쪽 위 **+ New query** 버튼을 클릭합니다.
3. 왼쪽 큰 입력 칸에 **아래 SQL만** 복사해서 붙여넣기 합니다.  
   ⚠️ **첫 줄의 "sql" 표시나 맨 끝의 표시용 기호는 빼고, "create table"부터 "with check (true);"까지만 복사하세요.** 그렇지 않으면 "syntax error at ```" 에러가 납니다.

```sql
create table if not exists public.library_uploads (
  id text primary key,
  title text not null,
  author text not null default 'me',
  author_avatar text not null default 'H',
  views int not null default 0,
  likes int not null default 0,
  thumbnail text,
  preview_url text,
  preview_embed text,
  embed_code text not null default '',
  embed_codes jsonb,
  description text default '',
  tags jsonb default '[]',
  created_at date not null default current_date,
  is_spline boolean not null default false
);

alter table public.library_uploads enable row level security;

create policy "Anyone can read library_uploads"
  on public.library_uploads for select
  using (true);

create policy "Anyone can insert library_uploads"
  on public.library_uploads for insert
  with check (true);
```

4. 입력 칸 아래 **Run** (또는 재생 버튼) 을 눌러 실행합니다.
5. 아래에 **Success** 메시지가 나오면 2번은 끝입니다.  
   **"policy ... already exists"** 에러가 나와도 괜찮습니다. 테이블과 정책이 이미 있다는 뜻이므로 2번은 완료된 것입니다. 3번으로 넘어가세요.

---

## 3. 프론트 설정 (우리 사이트가 Supabase를 쓰라고 연결하기)

우리 프로젝트 코드에 “어느 Supabase 프로젝트를 쓸지” 알려주는 단계입니다.

1. 프로젝트 폴더에서 **`js/supabase-config.js`** 파일을 엽니다.
2. 1번에서 복사해 둔 두 값을 아래처럼 넣습니다.
   - **`url`** → 1번에서 복사한 **Project URL** 그대로 붙여넣기
   - **`anonKey`** → 1번에서 복사한 **anon public** 키 그대로 붙여넣기

   예시 (실제 값은 본인 프로젝트 값으로 바꾸기):

   ```javascript
   window.__SUPABASE__ = {
     url: 'https://abcdefghijk.supabase.co',   // ← 여기에 Project URL
     anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.긴문자열...'   // ← 여기에 anon key
   };
   ```

3. 파일 **저장** 후, 사이트를 **새로고침** 합니다.

이제 Upload로 올린 항목은 Supabase에 저장되고, 같은 사이트를 여는 **모든 사람**이 볼 수 있습니다.  
이 단계를 하지 않으면 이전처럼 **localStorage**만 사용해서, 본인 기기에서만 보입니다.
