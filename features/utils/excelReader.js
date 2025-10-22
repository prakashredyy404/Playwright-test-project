import xlsx from 'xlsx';
function readExcel(path, Sheet,namevalue) {
    const workbook = xlsx.readFile(path);
    const sheet = workbook.Sheets[Sheet];
   const products=  xlsx.utils.sheet_to_json(sheet);
       return products;
}
export default readExcel;