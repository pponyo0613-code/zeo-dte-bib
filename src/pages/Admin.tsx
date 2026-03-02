import React, { useState, useEffect } from 'react';
import { Settings, FileText, ShoppingBag, Plus, Trash2, Save, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

export default function Admin({ settings, setSettings }: { settings: any, setSettings: any }) {
  const [activeTab, setActiveTab] = useState('settings');
  const [posts, setPosts] = useState<any[]>([]);
  const [preorders, setPreorders] = useState<any[]>([]);
  const [localSettings, setLocalSettings] = useState(settings);
  const [isSaving, setIsSaving] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', image_url: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [postsRes, preordersRes] = await Promise.all([
      fetch('/api/posts'),
      fetch('/api/preorders')
    ]);
    setPosts(await postsRes.json());
    setPreorders(await preordersRes.json());
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(localSettings),
    });
    setSettings(localSettings);
    setIsSaving(false);
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    });
    if (res.ok) {
      setNewPost({ title: '', content: '', image_url: '' });
      fetchData();
    }
  };

  const handleDeletePost = async (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      fetchData();
    }
  };

  const handleUpdatePreorderStatus = async (id: number, status: string) => {
    await fetch(`/api/preorders/${id}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    fetchData();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-2">
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'settings' ? 'bg-stone-100 text-stone-900 font-medium' : 'text-stone-600 hover:bg-stone-50'}`}
          >
            <Settings size={20} />
            <span>사이트 설정</span>
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'posts' ? 'bg-stone-100 text-stone-900 font-medium' : 'text-stone-600 hover:bg-stone-50'}`}
          >
            <FileText size={20} />
            <span>게시물 관리</span>
          </button>
          <button
            onClick={() => setActiveTab('preorders')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'preorders' ? 'bg-stone-100 text-stone-900 font-medium' : 'text-stone-600 hover:bg-stone-50'}`}
          >
            <ShoppingBag size={20} />
            <span>프리오더 관리</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-stone-100 min-h-[600px]">
          {activeTab === 'settings' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif text-stone-900">사이트 설정</h2>
                <button
                  onClick={handleSaveSettings}
                  disabled={isSaving}
                  className="flex items-center space-x-2 px-6 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors disabled:opacity-50"
                  style={{ backgroundColor: settings.primaryColor }}
                >
                  <Save size={18} />
                  <span>{isSaving ? '저장 중...' : '저장하기'}</span>
                </button>
              </div>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">사이트 이름</label>
                  <input
                    type="text"
                    value={localSettings.siteName}
                    onChange={(e) => setLocalSettings({ ...localSettings, siteName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none"
                    style={{ '--tw-ring-color': settings.primaryColor } as any}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">사이트 설명 (SEO)</label>
                  <textarea
                    value={localSettings.siteDescription}
                    onChange={(e) => setLocalSettings({ ...localSettings, siteDescription: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none h-24"
                    style={{ '--tw-ring-color': settings.primaryColor } as any}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">메인 컬러</label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={localSettings.primaryColor}
                        onChange={(e) => setLocalSettings({ ...localSettings, primaryColor: e.target.value })}
                        className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                      />
                      <span className="text-stone-600 font-mono text-sm">{localSettings.primaryColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">서브 컬러</label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={localSettings.secondaryColor}
                        onChange={(e) => setLocalSettings({ ...localSettings, secondaryColor: e.target.value })}
                        className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                      />
                      <span className="text-stone-600 font-mono text-sm">{localSettings.secondaryColor}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">폰트 패밀리</label>
                  <select
                    value={localSettings.fontFamily}
                    onChange={(e) => setLocalSettings({ ...localSettings, fontFamily: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none bg-white"
                    style={{ '--tw-ring-color': settings.primaryColor } as any}
                  >
                    <option value="Noto Serif KR">Noto Serif KR (명조체)</option>
                    <option value="Noto Sans KR">Noto Sans KR (고딕체)</option>
                    <option value="Inter">Inter (영문 기본)</option>
                  </select>
                </div>
                <div className="pt-6 border-t border-stone-100">
                  <h3 className="text-lg font-medium text-stone-900 mb-4">메인 배너 설정</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">배너 이미지 URL</label>
                      <input
                        type="text"
                        value={localSettings.heroImage}
                        onChange={(e) => setLocalSettings({ ...localSettings, heroImage: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none"
                        style={{ '--tw-ring-color': settings.primaryColor } as any}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">배너 제목</label>
                      <input
                        type="text"
                        value={localSettings.heroTitle}
                        onChange={(e) => setLocalSettings({ ...localSettings, heroTitle: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none"
                        style={{ '--tw-ring-color': settings.primaryColor } as any}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">배너 부제목</label>
                      <input
                        type="text"
                        value={localSettings.heroSubtitle}
                        onChange={(e) => setLocalSettings({ ...localSettings, heroSubtitle: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none"
                        style={{ '--tw-ring-color': settings.primaryColor } as any}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'posts' && (
            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-8">게시물 관리</h2>
              
              <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-100">
                <h3 className="text-lg font-medium text-stone-900 mb-4 flex items-center gap-2">
                  <Plus size={20} /> 새 게시물 작성
                </h3>
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="제목"
                      required
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none"
                      style={{ '--tw-ring-color': settings.primaryColor } as any}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="이미지 URL (선택사항)"
                      value={newPost.image_url}
                      onChange={(e) => setNewPost({ ...newPost, image_url: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none"
                      style={{ '--tw-ring-color': settings.primaryColor } as any}
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="내용"
                      required
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none h-32"
                      style={{ '--tw-ring-color': settings.primaryColor } as any}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 text-white rounded-full hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: settings.primaryColor }}
                  >
                    작성하기
                  </button>
                </form>
              </div>

              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="flex items-start justify-between p-6 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors">
                    <div className="flex gap-6">
                      {post.image_url && (
                        <img src={post.image_url} alt="" className="w-24 h-24 object-cover rounded-xl" referrerPolicy="no-referrer" />
                      )}
                      <div>
                        <h4 className="text-lg font-medium text-stone-900 mb-2">{post.title}</h4>
                        <p className="text-stone-600 text-sm line-clamp-2 mb-2">{post.content}</p>
                        <span className="text-xs text-stone-400">
                          {format(new Date(post.created_at), 'yyyy.MM.dd HH:mm')}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                      title="삭제"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                {posts.length === 0 && (
                  <p className="text-center text-stone-500 py-8">등록된 게시물이 없습니다.</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'preorders' && (
            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-8">프리오더 관리</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 text-sm">
                      <th className="pb-4 font-medium">주문일시</th>
                      <th className="pb-4 font-medium">이름</th>
                      <th className="pb-4 font-medium">연락처</th>
                      <th className="pb-4 font-medium">컬러</th>
                      <th className="pb-4 font-medium">수량</th>
                      <th className="pb-4 font-medium">상태</th>
                      <th className="pb-4 font-medium">관리</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {preorders.map((order) => (
                      <tr key={order.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                        <td className="py-4 text-stone-500">
                          {format(new Date(order.created_at), 'yyyy.MM.dd HH:mm')}
                        </td>
                        <td className="py-4 font-medium text-stone-900">{order.name}</td>
                        <td className="py-4 text-stone-600">{order.phone}</td>
                        <td className="py-4 text-stone-600">
                          <span className="px-2 py-1 bg-stone-100 rounded-md text-xs">{order.color}</span>
                        </td>
                        <td className="py-4 text-stone-600">{order.quantity}개</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status === 'completed' ? '입금완료' : '입금대기'}
                          </span>
                        </td>
                        <td className="py-4">
                          {order.status === 'pending' && (
                            <button
                              onClick={() => handleUpdatePreorderStatus(order.id, 'completed')}
                              className="flex items-center gap-1 text-xs text-stone-600 hover:text-stone-900 transition-colors border border-stone-200 px-3 py-1.5 rounded-full hover:bg-white"
                            >
                              <CheckCircle size={14} /> 입금확인
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {preorders.length === 0 && (
                  <p className="text-center text-stone-500 py-12">접수된 프리오더가 없습니다.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
