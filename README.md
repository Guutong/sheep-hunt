## โจทย์: ล่าแกะ

*** อ่านหมายเหตุด้วยนะครับ ***

หมาป่าตัวหนึ่ง ออกล่าแกะเป็นประจำ สำเร็จบ้าง ไม่สำเร็จบ้าง
วันหนึ่งหมาป่ารู้สึกสงสัยว่าทำไมถึงไม่สำเร็จ เลยเอาข้อมูลมาดู
พบว่า...

- ถ้าวันไหนมีฝูงแกะที่เกาะกลุ่มกันตั้งแต่ 4 ตัวขึ้นไปวันนั้นหมาป่าจะล่าแกะฝูงนั้นสำเร็จ
- ถ้ามีฝูงแกะที่เกาะกลุ่มกันตั้งแต่ 1-3 ตัว หมาป่าจะล่าแกะฝูงนั้นไม่สำเร็จ

ด้วยการค้นพบนี้ หมาป่าเลยลงทุนสร้างเครื่องวาดแผนที่พร้อมทั้งระบุว่าแกะอยู่ที่ไหนบ้างลงในแผนที่ ติดอยู่แค่ว่า มีข้อมูลแล้ว หมาป่าอยากให้เครื่องนี้บอกหมาป่าได้เลยว่า ถ้าวันนี้ออกล่า จะสำเร็จหรือไม่

input: ขนาดความกว้าง, สูง, และ array 2 มิติ ค่าข้างในเป็น int 0 หรือ 1 ถ้าเป็น 0 ตรงนั้นไม่มีแกะ แต่ถ้าเป็น 1 ตรงนั้นมีแกะ

output:
true - ถ้าเจอฝูงแกะ เกาะกลุ่มกัน 4 ตัวขึ้นไป
false - ถ้าไม่เจอฝูงแกะที่เกาะกลุ่มกัน 4 ตัวขึ้นไป

*** หมายเหตุ: เกาะกลุ่มกันคือ อยู่ติดกันในแนวตั้ง หรือแนวนอน ส่วนแนวทะแยงไม่นับ ***

เช่น

3, 3, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
false

3, 3, [[0, 0, 1], [0, 0, 1], [0, 1, 1]]
true

4, 4, [[0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]]
true

4, 4, [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
true

4, 4, [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
false