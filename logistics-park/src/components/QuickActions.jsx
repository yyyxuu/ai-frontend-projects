import { quickActions } from '../data/mockData';

const colorMap = {
  blue: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
  green: 'bg-green-100 hover:bg-green-200 text-green-700',
  orange: 'bg-orange-100 hover:bg-orange-200 text-orange-700',
  purple: 'bg-purple-100 hover:bg-purple-200 text-purple-700',
  pink: 'bg-pink-100 hover:bg-pink-200 text-pink-700',
  red: 'bg-red-100 hover:bg-red-200 text-red-700',
};

export function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">快捷操作</h3>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {quickActions.map((action) => (
          <button
            key={action.id}
            className={`flex flex-col items-center gap-2 p-3 rounded-lg ${colorMap[action.color]} transition-colors group`}
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{action.icon}</span>
            <span className="text-xs font-medium text-center">{action.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
