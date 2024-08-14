<h1>Folder Comparison Tool</h1>

<h2>Açıklama</h2>
<p>Bu proje, iki klasörü karşılaştırarak, dosyaların eksik olup olmadığını ve aynı dosyaların içeriklerinin farklı olup olmadığını kontrol eden bir Node.js aracıdır. Bu araç, özellikle yedekleme, senkronizasyon veya versiyon kontrolü gibi senaryolarda kullanılabilir.</p>

<h2>Teknolojiler</h2>
<ul>
 <li><strong>Node.js:</strong> Proje, JavaScript çalıştırma ortamı olarak Node.js kullanılarak yazılmıştır.</li>
   <li><strong>Crypto:</strong> Dosyaların hash değerlerini hesaplamak için Node.js'nin `crypto` modülü kullanılmıştır.</li>
   <li><strong>File System (fs):</strong> Dosya ve klasörlerle etkileşimde bulunmak için Node.js'nin `fs` modülü kullanılmıştır.</li>
   <li><strong>Path:</strong> Dosya yollarını yönetmek için Node.js'nin `path` modülü kullanılmıştır.</li>
</ul>

<h2>Kurulum</h2>
<ol>
   <li><strong>Depoyu Klonlayın:</strong></li>
  <pre><code>git clone https://github.com/Dogukandogann/FolderCompartion.git</code></pre>

  <li><strong>Proje Dizinine Gidin:</strong></li>
  <pre><code>cd FolderCompartion</code></pre>

  <li><strong>Gerekli Bağımlılıkları Yükleyin:</strong></li>
  <pre><code> Bu proje herhangi bir üçüncü taraf kütüphaneye bağımlı olmadığından, bu adımı atlayabilirsiniz. Ancak Node.js kurulu olmalıdır.</code></pre>

</ol>

<h2>Kullanım</h2>
<p>Projenin ana amacı, iki klasör arasında dosya karşılaştırması yapmaktır. Bunu yapmak için şu adımları izleyin:</p>

<ul>
  <li>Terminali açın ve proje dizinine gidin</li>
  <li>Komutu çalıştırın  node Comparsion.js "folder1" "folder2" ( `folder1` ve `folder2` yerlerine karşılaştırmak istediğiniz iki klasörün yolunu yazın.)</li>
  <li> Örnek Kullanım ;  <pre><code>node Comparsion.js C:\Klasor1 C:\Klasor2</code></pre></li>
</ul>

<h1>English</h1>

<h2>Description</h2>
<p>This project is a Node.js tool that compares two directories to check for missing files and differences in the content of identical files. This tool can be useful for scenarios such as backup, synchronization, or version control.</p>

<h2>Technologies</h2>
<ul>
 <li><strong>Node.js:</strong> The project is written using Node.js as the JavaScript runtime environment.</li>
 <li><strong>Crypto:</strong> Node.js's `crypto` module is used to compute hash values of files.</li>
 <li><strong>File System (fs):</strong> Node.js's `fs` module is used for interacting with files and directories.</li>
 <li><strong>Path:</strong> Node.js's `path` module is used to manage file paths.</li>
</ul>

<h2>Installation</h2>
<ol>
 <li><strong>Clone the Repository:</strong></li>
 <pre><code>git clone https://github.com/Dogukandogann/FolderComparsion.git</code></pre>

 <li><strong>Navigate to the Project Directory:</strong></li>
 <pre><code>cd FolderComparsion</code></pre>

 <li><strong>Install Dependencies:</strong></li>
 <pre><code> Since this project does not rely on any third-party libraries, you can skip this step. However, Node.js must be installed.</code></pre>
</ol>

<h2>Usage</h2>
<p>The main purpose of this project is to compare two directories. To do this, follow these steps:</p>

<ul>
 <li>Open the terminal and navigate to the project directory</li>
 <li>Run the command <code>node Comparsion.js "folder1" "folder2"</code> (replace <code>folder1</code> and <code>folder2</code> with the paths of the two directories you want to compare.)</li>
 <li>Example Usage: <pre><code>node Comparsion.js C:\Folder1 C:\Folder2</code></pre></li>
</ul>

