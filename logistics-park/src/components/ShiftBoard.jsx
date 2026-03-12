import { shiftData } from '../data/mockData';

const statusConfig = {
  'on-duty': { bg: 'bg-green-100', text: 'text-green-700', label: '在岗' },
  'break': { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '休息' },
  'off-duty': { bg: 'bg-gray-100', text: 'text-gray-700', label: '下班' },
};

export function ShiftBoard() {
  const onDutyCount = shiftData.workers.filter(w => w.status === 'on-duty').length;
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">班次安排</h3>
          <p className="text-sm text-muted-foreground">{shiftData.currentShift} · {shiftData.shiftTime}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{onDutyCount}</div>
          <div className="text-xs text-muted-foreground">在岗/ {shiftData.workers.length}</div>
        </div>
      </div>
      
      <div className="space-y-2">
        {shiftData.workers.map((worker, index) => {
          const config = statusConfig[worker.status];
          return (
            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">{worker.name[0]}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{worker.name}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${config.bg} ${config.text}`}>
                    {config.label}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">{worker.role} · {worker.area}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
