import { INumericSummaryItem } from '@/utils/type/landing';

const numericSummaryData: INumericSummaryItem[] = [
  {
    prefix: 'Hơn',
    numericData: 5,
    suffix: 'năm thành lập',
  },
  {
    prefix: 'Với hơn',
    numericData: 70,
    suffix: 'món ăn',
    animated: true,
  },
  {
    prefix: 'Thực hiện bởi',
    numericData: 20,
    suffixNumericData: '+',
    suffix: 'đầu bếp chuyên nghiệp',
    animated: true,
  },
];

const openHours = '05:45 - 23:30 hằng ngày';

export { openHours, numericSummaryData };
