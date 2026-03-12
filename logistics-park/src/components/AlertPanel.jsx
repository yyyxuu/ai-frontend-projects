import { useState } from 'react';
import { alertsData } from '../data/mockData';

const alertStyles = {
  warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', icon: '⚠️', text: 'text-yellow-800' },
  error: { bg: 'bg-red-50', border: 'border-red-200', icon: '❌', text: 'text-red-800' },
  info: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'ℹ️', text: 'text-blue-800' },
  success: { bg: 'bg-green-50', border: 'border-green-200', icon: '✅', text: 'text-green-800' },
};

export function AlertPanel() {
  const [selectedAlert, setSelectedAlert] = useState(null);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">实时告警</h3>
        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
          {alertsData.length} 条通知
        </span>
      </div>
      <div className="space-y-3">
        {alertsData.map((alert) => {
          const style = alertStyles[alert.type];
          return (
            <div
              key={alert.id}
              className={`${style.bg} ${style.border} border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow`}
              onClick={() => setSelectedAlert(selectedAlert === alert.id ? null : alert.id)}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg">{style.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-sm font-medium ${style.text}`}>{alert.title}</h4>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                  <p className="text-sm text-foreground mt-1">{alert.message}</p>
                  {selectedAlert === alert.id && (
                    <div className="mt-2 pt-2 border-t border-border">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded hover:opacity-90 transition-opacity">
                          查看详情
                        </button>
                        <button className="px-3 py-1 bg-secondary text-foreground text-xs rounded hover:bg-border transition-colors">
                          标记已读
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
