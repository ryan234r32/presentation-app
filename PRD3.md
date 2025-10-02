# Claude Code 修改指令 v2

```markdown
# 網頁視覺全面優化修改

## 核心設計理念改變

### 背景圖片處理原則
**重要變更:**
- ❌ 移除所有彩色濾鏡 (橘色、藍色等)
- ✅ 使用原始圖片,最多加上輕微淡化效果
- ✅ 如需遮罩,只用 `rgba(255, 255, 255, 0.1)` 或 `rgba(0, 0, 0, 0.15)` 的輕微淡化
- ✅ 讓圖片本身的色彩和質感完整呈現

**技術實作:**
```tsx
// ❌ 舊的做法 (不要用)
style={{
  backgroundImage: `linear-gradient(rgba(255, 107, 53, 0.7), rgba(255, 210, 63, 0.7)), url('...')`
}}

// ✅ 新的做法 (改用這個)
style={{
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('...')`
}}
// 或者完全不加遮罩,直接:
style={{
  backgroundImage: `url('...')`
}}
```

---

## 逐頁具體修改

### Page 1: 封面頁
**保持:** 現有設計
**調整:** 
- 移除橘→黃漸層背景
- 改用星空/起跑線高品質原圖
- 輕微淡化遮罩(如果文字不夠清楚才加)

---

### Page 2: 追女生故事 → 受傷
**完全重新設計:**

**第一張投影片 (6:30 → 5:10):**
- 保持現有設計
- 背景: 清晰的運動場/跑道照片
- 移除彩色濾鏡

**新增第二張投影片:**
- **背景圖片:** 輪椅/復健/醫院相關的溫和照片
  - 建議: 一個人坐輪椅的側面或背影
  - 或: 復健場景
  - 重要: 選擇溫和、有希望感的照片,不要太沉重
- **文字:** 極簡
  - 可以只放: "意外的轉折" 或 "受傷了"
  - 字體: 大而清晰
- **圖片處理:** 直接使用原圖,不加彩色濾鏡

**搜尋關鍵字:**
- "wheelchair hope", "recovery journey", "rehabilitation"
- "person in wheelchair outdoors"

---

### Page 3: 困境中的成長
**調整:**
- 移除彩色背景/漸層
- 改用陽光、自然、成長相關的真實照片
- 三張卡片保持,但背景用半透明白色: `bg-white/80` 或 `bg-white/70`

---

### Page 4: 我能為世界做什麼
**重要修改:**

**背景圖片:**
- ✅ **使用哈佛大學的照片**
- 建議: 哈佛校園、紀念教堂、圖書館等標誌性建築
- 使用高解析度原圖
- 可以加輕微淡化讓文字清楚

**搜尋關鍵字:**
- "Harvard University campus"
- "Harvard Memorial Church"
- "Harvard Yard"

**文字處理:**
- 確保文字在哈佛照片上清晰可讀
- 可以用白色文字 + 深色陰影
- 或在文字區域加上半透明白色背景卡片

---

### Page 5: 台大創新系三關卡
**保持:** 關卡內容和結構(已按上次修改)

**調整:**
- 移除藍綠色背景
- 改用遊戲地圖/冒險相關的真實照片或插圖
- 三個關卡卡片使用半透明背景: `bg-white/85`

---

### Page 6: 我在創新系做什麼
**完全重新設計排版:**

**問題診斷:**
當前排版問題可能包括:
- 元素重疊
- 對齊不正確
- 響應式設計問題

**新的排版建議:**

**方案 A: 垂直時間軸設計**
```tsx
<section className="min-h-screen relative bg-cover bg-center" style={{backgroundImage: `url('...')`}}>
  <div className="container mx-auto px-8 py-20">
    {/* 標題 */}
    <h2 className="text-5xl font-bold text-center mb-16">我在創新系做什麼</h2>
    
    {/* SDGs 標誌區 */}
    <div className="flex justify-center mb-12">
      <div className="bg-white/90 p-6 rounded-2xl">
        <p className="text-2xl font-bold">SDGs 第3項:健康與福祉</p>
      </div>
    </div>
    
    {/* 流程圖 */}
    <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
      {/* 步驟 1 */}
      <div className="bg-white/90 p-8 rounded-2xl w-full text-center">
        <div className="text-6xl mb-4">🎯</div>
        <h3 className="text-3xl font-bold mb-2">發現問題</h3>
        <p className="text-xl">注意到身心健康的重要性</p>
      </div>
      
      <div className="text-4xl">↓</div>
      
      {/* 步驟 2 */}
      <div className="bg-white/90 p-8 rounded-2xl w-full text-center">
        <div className="text-6xl mb-4">💪</div>
        <h3 className="text-3xl font-bold mb-2">持續努力</h3>
        <p className="text-xl">投入 6-9 個月的時間</p>
      </div>
      
      <div className="text-4xl">↓</div>
      
      {/* 步驟 3: 團隊 */}
      <div className="bg-white/90 p-8 rounded-2xl w-full">
        <h3 className="text-3xl font-bold text-center mb-6">團隊規模</h3>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-6xl font-bold text-blue-500 mb-2">6</div>
            <p className="text-2xl">位老師</p>
          </div>
          <div>
            <div className="text-6xl font-bold text-green-500 mb-2">3</div>
            <p className="text-2xl">位朋友</p>
          </div>
          <div>
            <div className="text-6xl font-bold text-orange-500 mb-2">28</div>
            <p className="text-2xl">位學生</p>
          </div>
        </div>
      </div>
      
      <div className="text-4xl">↓</div>
      
      {/* 成果 */}
      <div className="bg-white/90 p-8 rounded-2xl w-full text-center">
        <div className="text-6xl mb-4">✨</div>
        <h3 className="text-3xl font-bold">創造改變</h3>
        <p className="text-xl">一起為更好的世界努力!</p>
      </div>
    </div>
  </div>
</section>
```

**方案 B: 卡片式橫向設計**
```tsx
<section className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url('...')`}}>
  <div className="container mx-auto px-8">
    <h2 className="text-6xl font-bold text-center mb-16">我在創新系做什麼</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* 議題卡片 */}
      <div className="bg-white/90 p-10 rounded-3xl">
        <h3 className="text-3xl font-bold mb-4">我的議題</h3>
        <div className="text-xl leading-relaxed">
          <p className="mb-4">SDGs 第3項:健康與福祉</p>
          <p>如何幫助大學生變得更快樂,在面對壓力時擁有調節的能力</p>
        </div>
      </div>
      
      {/* 行動卡片 */}
      <div className="bg-white/90 p-10 rounded-3xl">
        <h3 className="text-3xl font-bold mb-4">我的行動</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-blue-500">6</span>
            <span className="text-2xl">位老師</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-green-500">3</span>
            <span className="text-2xl">位朋友</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-orange-500">28</span>
            <span className="text-2xl">位學生</span>
          </div>
          <p className="text-xl text-gray-600 pt-4">討論 6-9 個月,設計出課程</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**選擇其中一個方案實作,確保:**
- 沒有元素重疊
- 對齊整齊
- 響應式正常
- 背景圖清晰(團隊合作/課堂相關)

---

### Page 7: 給大家的建議
**調整:**
- 移除彩色背景
- 改用探索/好奇/學習相關的真實照片
- 三張卡片用半透明白色背景

---

### Page 8: 影片頁
**調整:**
- 背景用科技/未來相關的真實照片
- 移除彩色元素
- 影片周圍可以加白色卡片襯底

---

### Page 9: 結尾頁
**重要修改 - 極簡設計:**

**設計要求:**
- ✅ **只有文字 + 美麗風景照片**
- ❌ 不要額外的圖案、圖標、裝飾元素
- ❌ 不要彩帶、星星、慶祝圖示

**具體實作:**
```tsx
<section 
  className="min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url('美麗風景照片URL')`
  }}
>
  <div className="text-center">
    <h1 className="text-7xl font-bold text-white mb-8" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
      記住
    </h1>
    <p className="text-5xl text-white font-medium" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
      每個人都有改變世界的能力
    </p>
    <p className="text-3xl text-white mt-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
      從發現自己熱愛的事情開始!
    </p>
  </div>
</section>
```

**背景圖片建議:**
- 山景、海景、日出、日落
- 遼闊的風景照
- 壯麗的自然景觀
- 有希望感和開闊感的照片

**搜尋關鍵字:**
- "mountain landscape sunset"
- "ocean view sunrise"  
- "inspiring landscape"
- "beautiful nature scenery"

**文字處理:**
- 大字體
- 白色文字
- 深色陰影確保可讀性
- 不需要背景卡片

---

## 全域技術要求總結

### 1. 背景圖片處理
```css
/* 所有頁面統一使用 */
.section-background {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 如果文字不夠清楚,最多加這個 */
.light-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
}
```

### 2. 卡片/內容區背景
```tsx
// 用半透明白色,不用彩色
className="bg-white/80 backdrop-blur-sm"
// 或
className="bg-white/90"
```

### 3. 圖片資源
優先使用 Unsplash 高品質照片:
```
https://images.unsplash.com/photo-[ID]?w=1920&q=80
```

---

## 修改執行清單

- [ ] 移除所有頁面的彩色濾鏡(橘、黃、藍、綠等)
- [ ] Page 2: 新增受傷/輪椅投影片
- [ ] Page 4: 改用哈佛大學照片
- [ ] Page 6: 完全重新設計排版(選擇方案A或B)
- [ ] Page 6: 修復所有排版問題
- [ ] Page 9: 極簡設計,只有文字+風景照
- [ ] 所有卡片改用 bg-white/80 或 bg-white/90
- [ ] 確保所有背景圖都是高品質原圖
- [ ] 測試響應式設計

---

請立即執行以上所有修改。重點是:
1. **讓圖片說話** - 不要過度處理
2. **極簡主義** - 特別是最後一頁
3. **修復排版** - Page 6 要完全重做
4. **真實感** - 使用真實照片,不要過多裝飾

開始執行!
```

---

這個指令已經將你的所有新需求整理好了,重點包括:

1. ✅ **移除彩色濾鏡** - 改用輕微淡化或直接用原圖
2. ✅ **Page 2 新增受傷頁面** - 輪椅/復健照片
3. ✅ **Page 4 用哈佛照片**
4. ✅ **Page 6 完全重新設計** - 提供了兩個方案
5. ✅ **Page 9 極簡設計** - 只要文字+風景照

直接複製這段貼到 Cursor 的 Claude Code 就可以了!