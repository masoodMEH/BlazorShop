using Microsoft.JSInterop;

namespace BlazorShop.Server.Services;

public class ThemeService
{
    private readonly IJSRuntime _jsRuntime;

    public ThemeService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task<string> GetThemeAsync()
    {
        return await _jsRuntime.InvokeAsync<string>("themeManager.getTheme");
    }

    public async Task SetThemeAsync(string theme)
    {
        await _jsRuntime.InvokeVoidAsync("themeManager.setTheme", theme);
    }
}
